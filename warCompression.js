function compressArmy(army) {
    var armySoFar = []
    for (let i = 0; i < army.length; i++) {
        const person = army[i];
        armySoFar.push({
            name:person.name,
            stats:person.person.stats,
            order:-person.pos.x,
            level:person.person.level,
            xp:person.person.xp,
            nextUpgrade:person.person.nextUpgrade,

            heldFood:person.person.heldFood,
        })

    }


    return JSON.stringify(armySoFar)
}

function decompressArmy(armyStr) {
    var armyList = JSON.parse(armyStr),
        armyMembers = new Array()

    armyList = armyList.sort((a,b)=>{return(a.order-b.order)})

    for (let i = 0; i < armyList.length; i++) {
        const person = armyList[i];

        var p = createPerson(
            {
                sprite:{
                        name:person.name,
                        imageSrc:`${person.name.replace(" ", "_")}.png`,

                    },
                    stats:person.stats,
                    level:person.level,
                    xp:person.xp,
                    nextUpgrade:person.nextUpgrade,

                    
            }
        )
        if (person.heldFood != undefined) setPersonHeldFood(p, person.heldFood)
        armyMembers.push(p)
        p.order = person.order
        p.army = armyMembers
    }


    
    return armyMembers


}