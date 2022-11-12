function getRandomArmy() {
    var armyMembers = new Array()
    for (let i = 0; i < 5; i++) {
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
        p.army = armyMembers
        armyMembers.push(p)
    }

    return armyMembers
}