function getRandomArmy() {
    var armyMembers = new Array(),
    count = Math.min(Math.floor((((gameState.turn-1)+(Math.random()*1.25))*1.25))+1, 5)
    for (let i = 0; i < count; i++) {
        
        var p = createBotPerson(gameState.turn)
        p.army = armyMembers
        armyMembers.push(p)
    }

    return armyMembers
}


function createBotPerson(turn) {
    var randomPersons = Object.keys(personDetailsIndex).filter((e)=>{return getDetails(e).tier<7}),
            randomPerson = randomPersons[randInt(0, randomPersons.length-1)]
        randomPersonO = getDetails(randomPerson)
        
    var p = createPerson(
        {
            sprite:{
                    name:randomPerson,
                    imageSrc:randomPersonO.imageSrc,

                },
                stats:randomPersonO.baseStats,

                
        }
    )
    if (Math.random()<(turn/30)) {
        setPersonHeldFood(p, ["jelly","basil"][randInt(0,1)])
    }

    army2Name = names[randInt(0,names.length-1)].split(",")[0]

    var buffs = randInt(0, Math.floor(turn*0.75))
    p.stats.h += buffs
    p.stats.d += buffs
    p.level += Math.floor(buffs/3)

    return p
}