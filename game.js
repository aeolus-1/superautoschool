var gameState = {
    coins:10,
    health:10,
    trophies:0,
    turn:0,
}

function makePurchase(cost) {
    if (gameState.coins >= cost) {
        gameState.coins -= cost
        return true
    }
    return false
}




var y = 30-101+45,
    y2 = 290-101+45

var stonePos = {
    person1:v(150,y),
    person2:v(0,y),
    person3:v(-150,y),
    person4:v(-300,  y),
    person5:v(-450, y),
    
    //shop1:v(0, y2),
    shop2:v(-150, y2),
    shop3:v(-300, y2),
    shop4:v(-450, y2),

    shopFood1:v(300, y2),
    shopFood2:v(450, y2),
}


var gameHighlight

function createStones() {
    var stones = Object.keys(stonePos)
    for (let i = 0; i < stones.length; i++) {
        var stone = stonePos[stones[i]]
        var stoneS = createSprite({
            pos:{...stone},
            imageSrc:"stone.png",
            highlightable:true,
            droppable:(stones[i].includes("person"))
        })

        stoneS.srcStone = stonePos[stones[i]]
        stoneS.srcStone.name = stones[i]
        stonePos[stones[i]].ele = stoneS
    }
}

function startGame(preArmy, frozenIndivuals) {
    for (let i = 0; i < sprites.length; i++) {
        const sp = sprites[i];
        if (sp.person) {
            deletePerson(sp.person)
            continue
        }
        deleteSprite(sp)
    }

    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        deleteText(text)
    }
    gameState.coins = 10


    document.body.style["background-image"] = 'url("imgs/back.png")'
    createGui()

    createStones()

    gameHighlight = createSprite({
        imageSrc:"highlight.png",
        z:1,
    })


    genShop(frozenIndivuals)

    

    if (preArmy !=undefined) {

        var armys = decompressArmy(preArmy)

        for (let i = 0; i < armys.length; i++) {
            const person = armys[i];
            placeSpriteInStone(person.sprite, stonePos[`person${((i))+1}`])
            army1.push(person)
            person.army = army1
        }
    }


}


function createPerson(options) {
    var sprite = createSprite(options.sprite)
    delete options.sprite
    return new Person({sprite:sprite, ...options})

    
}
