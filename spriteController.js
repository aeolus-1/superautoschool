class Sprite {
    constructor(options={}) {
        this.options = {
            name:"mitchell cox",
            imageSrc:"mitchell_cox.png",
            background:undefined,
            hoverImageSrc:undefined,

            droppable:false,
            selectable:false,

            onclick:undefined,

            highlighable:false,
            visible:true,
            scale:1,
            tied:false,
            z:0,

            pos:v(),

            ...options,
        }

        this.name = this.options.name
        this.id = Math.random()
        this.render = {
            src:this.options.imageSrc,
            hoverSrc:this.options.hoverImageSrc,

            background:this.options.background,
            
            highlighable:this.options.highlighable,
            z:this.options.z,

            visible:this.options.visible,
            scale:this.options.scale,
        }
        
        this.onclick = this.options.onclick
        this.droppable = this.options.droppable
        this.selectable = this.options.selectable

        this.pos = this.options.pos
        this.targetPos = {...this.options.pos}
        this.rotation = 0

        this.tied = this.options.tied
        
        this.element = createSpriteHTML(this)
        this.element.sprite = this
        this.element.className += " reflection_overlay";
    }
}

function deleteSprite(sprite) {
    sprite.toDelete = true
    sprite.element.remove()
}

function clickSprite(e) {
    console.log(e.srcElement.sprite.pos.x)
    if (e.srcElement.sprite.selectable) {
        selectedSprite = e.srcElement.sprite
        gameHighlight.pos = {...e.srcElement.sprite.pos}
        gui['sell'].render.visible = !e.srcElement.sprite.inShop
        gui['freeze'].render.visible = !!e.srcElement.sprite.inShop
       
    }
    if (e.srcElement.sprite.onclick) e.srcElement.sprite.onclick(e)
}

function createSprite(options) {
    

    var sprite = new Sprite(options)
    
    sprites.push(sprite)

    return sprite
}


function placeSpriteInStone(sprite, stone) {
    sprite.pos = {...stone}
    stone.ele.docked = sprite
    sprite.dockedIn = stone.ele
}