function loadSpritesToScreen(sprites) {
    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        if (sprite.toDelete) {
            sprites.splice(i, 1)
        } else {

            sprite.element.style.position = "absolute"
            sprite.element.style["z-index"] = `${sprite.render.z}`
            sprite.element.style.display = (sprite.render.visible)?"":"none"
            sprite.element.style["-webkit-user-drag"] = (sprite.person!=undefined)?"":"none"

            
                
                

            sprite.element.style.left = `${(sprite.pos.x-(sprite.element.width/2))+(htmlSize.x/2)}px`
            sprite.element.style.top = `${(sprite.pos.y-(sprite.element.height/2))+(htmlSize.y/2)}px`

            sprite.element.style.transform = `rotate(${sprite.rotation}deg)`
        }

    }

    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        if (person.toDelete) {
            persons.splice(i, 1)
        } else {
            renderPerson(person)
        }
    }
}

function renderPerson(person) {
    if (!person.foodItem) {
        person.hotbar.pos = v(person.sprite.pos.x, person.sprite.pos.y+70)
        person.attackText.pos = v(person.sprite.pos.x-25, person.sprite.pos.y+70)
        person.healthText.pos = v(person.sprite.pos.x+25, person.sprite.pos.y+70)

        person.healthText.element.textContent = person.stats.h
        person.attackText.element.textContent = person.stats.d
    }
    person.freezeBlock.pos = v(person.sprite.pos.x, person.sprite.pos.y)
    person.ability.pos = v(person.sprite.pos.x, person.sprite.pos.y-200)
    person.abilityText.pos = v(person.sprite.pos.x, person.sprite.pos.y-175)
    person.abilityText.element.style["-webkit-text-stroke"] = "1px"
    person.abilityText.element.style["color"] = "black"
    person.abilityText.element.style["font-family"] = "SAPDes"
    person.nameText.pos = v(person.sprite.pos.x, person.sprite.pos.y-250)
    person.nameText.element.style["-webkit-text-stroke"] = "1px"
    person.nameText.element.style["color"] = "black"
    person.nameText.element.style["font-family"] = "SAPDes"



    person.freezeBlock.render.visible = person.frozen

    if (person.freezeBlock.render.background != undefined) {
                

        var img = document.createElement("img")
        img.src = "imgs/"+person.freezeBlock.render.background

        person.freezeBlock.element.style["background-image"] = `url(imgs/${person.freezeBlock.render.background})`
        person.freezeBlock.element.style["width"] = `${document.getElementById("iceCubeImage").width}px`
        person.freezeBlock.element.style["height"] = `${document.getElementById("iceCubeImage").height}px`
        person.freezeBlock.element.style["pointer-events"] = "none"

    }
}


function runScreenShake() {
    document.body.style.position = "absolute"
    var shake = [`${Math.floor(Math.random()*screenShake)-(screenShake*0.5)}px`,`${Math.floor(Math.random()*screenShake)-(screenShake*0.5)}px`]
    document.body.style["backgroundPositionX"] = shake[0]
    document.body.style["backgroundPositionY"] = shake[1]
    document.body.style.left = shake[0]
    document.body.style.top = shake[1]

    screenShake *= 0.7
}