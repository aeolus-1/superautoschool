function getRandomArmy() {
    var armyMembers = new Array()
    for (let i = 0; i < 5; i++) {
        
        var p = createBotPerson(gameState.turn)
        p.army = armyMembers
        armyMembers.push(p)
    }

    return armyMembers
}


function createBotPerson(turn) {
    var randomPersons = Object.keys(personDetailsIndex),
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

    var buffs = randInt(0, Math.floor(turn*0.75))
    p.stats.h += buffs
    p.stats.d += buffs
    p.level += Math.floor(buffs/3)

    return p
}