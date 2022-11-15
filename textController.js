class Text {
    constructor(options) {
        this.options = {
            content:"uncontented",

            pos:v(),
            visible:true,
            tied:false,

            z:0,
            font:40,
            ...options,
        }

        this.pos = this.options.pos

        this.render = {
            z:this.options.z,
            font:this.options.font,
            visible:this.options.visible,

            scale:1,

            targetScale:1,
            targetScaleV:0,
            targetRotation:0,
            targetRotationV:0,
        }
        this.tied = this.options.tied


        this.element = createElementFromHTML(htmls.text(options))
        document.body.appendChild(this.element)

    }
}

function loadText(texts) {
    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        if (text.toDelete) {
            texts.splice(i, 1)
        } else {

            text.element.style.position = "absolute"
            text.element.style["display"] = (text.render.visible)?"":"none"
            text.element.style["z-index"] = `${text.render.z}`
            text.element.style["font-size"] = `${text.render.font}px`
            text.element.style["min-width"] = "270px"

            text.element.style.left = `${(text.pos.x-(text.element.offsetWidth/2))+(htmlSize.x/2)}px`
            text.element.style.top = `${(text.pos.y-(text.element.offsetHeight/2))+(htmlSize.y/2)}px`


            text.element.style.transform = `rotate(0deg) scale(${text.render.scale*(1-((1-text.render.targetScale)*0.1))})`
        
            text.render.targetScale += text.render.targetScaleV
            text.render.targetScaleV += (text.render.scale-text.render.targetScale)*0.2
            text.render.targetScaleV *= 0.8

            
            
        }
        
    }
}

function createText(options) {
    var t = new Text(options)
    texts.push(t)
    return t
}

function deleteText(text) {
    text.toDelete = true
    text.element.remove()
}