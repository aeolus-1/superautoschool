function getArmy() {
    var army = [];
    [stonePos.person1,stonePos.person2,stonePos.person3,stonePos.person4,stonePos.person5].forEach(e => {
        if (e.ele.docked) {
            army.push(e.ele.docked)
        }
    });

    return army
}
var army1 = [],
    army2,
    preArmy,
    warStageAllClear = 0,
    targetPosInterval,

    frozenIndivuals = []

function startWar(army1S, army2S) {
    preArmy = army1S
    document.body.style["background-image"] = 'url("imgs/backWar.png")'
    document.body.style["background-color"] ="black"
    frozenIndivuals = []
    for (let i = 0; i < sprites.length; i++) {
        const sp = sprites[i];
        if (sp.person) {
            if (sp.person.frozen) {
                frozenIndivuals.push({
                    name:sp.name,
                    stats:sp.person.stats,
                    order:-sp.pos.x,
                    stone:sp.dockedIn.srcStone
                })
            }
            deletePerson(sp.person)
            
        } else if (!sp.tied){
            deleteSprite(sp)
        }
    }

    for (let i = 0; i < texts.length; i++) {
        const text = texts[i];
        if (!text.tied) deleteText(text)
    }






    army1 = decompressArmy(army1S)
    army2 = getRandomArmy()

    targetPosInterval = setInterval(() => {
        updateSpritePos([...army1, ...army2])

    }, 1000/300);

    var aniStartTime = ((new Date().getTime())/1000)
    var walkInInterval = setInterval(() => {
        runWalkInAni(army1, 1, 
            Math.min((((new Date().getTime()/1000)-aniStartTime))/(3/globalAnimationSpeed), 1)
            )
            var finish = runWalkInAni(army2, -1, 
                Math.min((((new Date().getTime()/1000)-aniStartTime))/(3/globalAnimationSpeed), 1)
                )

        if (finish) {
            clearInterval(walkInInterval)
            setTimeout(()=>{
                for (let i = 0; i < [...army1,...army2].length; i++) {
                    const person = [...army1,...army2][i];
                    requestInteraction(person.sprite.name).ongamestart(person)
                }
                var checkInterval = setInterval(() => {
                    if (warStageAllClear <= 0) {
                        clearInterval(checkInterval)
                        setTimeout(()=>{
                            stepGame(0)
                        }, 1000/pauseSpeed)
                    }
                }, 1000/30);
                
            }, 1000/pauseSpeed)
        }
    }, 1000/30);


}

function updateSpritePos(sprites) {
    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        sprite.sprite.pos = v(
            sprite.sprite.pos.x+((sprite.sprite.pos.x-sprite.sprite.targetPos.x)*-0.4),
            sprite.sprite.pos.y+((sprite.sprite.pos.y-sprite.sprite.targetPos.y)*-0.4),
        )
    }
}


function runWalkInAni(army, direction, per) {
    for (let i = 0; i < army.length; i++) {
        const person = army[i];
        var j = (i)
        person.sprite.targetPos = v(
            (
                (((htmlSize.x*per)-(htmlSize.x)-100)*direction) - 
                (j*110*direction)
            ),
            ((per==1)?0.5:Math.abs(Math.sin((Math.PI*2)*((per*10)+(j*0.25)-0.5)))*15)+300
        )
    }

    return per==1
}




function aniSmash(army, direction, per) {
    army[0].sprite.targetPos.x = ((-100)*direction) + (50*direction*per)
    army[0].sprite.targetPos.y = 300-(5*per)

    return per==1
}
function aniBlast(army, direction, per) {
    screenShake = 10
    army[0].sprite.targetPos.x = ((-100)*direction) - (1200*direction*per)
    army[0].sprite.targetPos.y = 300 - (300*per)
    //army[0].sprite.targetPos.y = 300-(5*per)
    return per==1
}

function runDeathAbilitys() {
    var newSummons = []
    for (let i = 0; i < army1.length; i++) {
        const person = army1[i];
        if (person.stats.h <= 0) {
            requestInteraction(person.sprite.name).onfaint(person, newSummons)
        

        }
    }

    for (let i = 0; i < newSummons.length; i++) {
        const summon = newSummons[i];
        for (let j = 0; j < army1.length; j++) {
            const person = army1[j];
            requestInteraction(person.sprite.name).onfriendsummoned(person, summon)
        }
    }
    army1 = [...newSummons, ...army1]


    newSummons = []
    for (let i = 0; i < army2.length; i++) {
        const person = army2[i];
        if (person.stats.h <= 0) {
            requestInteraction(person.sprite.name).onfaint(person, newSummons)
        

        }
    }
    for (let i = 0; i < newSummons.length; i++) {
        const summon = newSummons[i];
        for (let j = 0; j < army2.length; j++) {
            const person = army2[j];
            requestInteraction(person.sprite.name).onfriendsummoned(person, summon)
        }
    }
    army2 = [...newSummons, ...army2]


    
}

function deleteDead() {
    for (let i = 0; i < army1.length; i++) {
        const person = army1[i];
        if (person.stats.h <= 0) {

        army1.splice(i,1)
        deletePerson(person)

        }
    }
    for (let i = 0; i < army2.length; i++) {
        const person = army2[i];
        if (person.stats.h <= 0) {
        army2.splice(i,1)
        deletePerson(person)

        }
    }
}

function calculateGame() {
    army1[0].stats.h -= army2[0].stats.d+(requestFoodInteraction(army1[0].heldFood).incomeDamageMod)
    army2[0].stats.h -= army1[0].stats.d+(requestFoodInteraction(army2[0].heldFood).incomeDamageMod)

    if (army2[0].stats.d+(requestFoodInteraction(army1[0].heldFood).incomeDamageMod) > 0) {
        requestInteraction(army1[0].sprite.name).onhurt(army1[0])

    }
    if (army1[0].stats.d+(requestFoodInteraction(army2[0].heldFood).incomeDamageMod) > 0) {
        requestInteraction(army2[0].sprite.name).onhurt(army2[0])

    }
    army1[0].alive = army1[0].stats.h>0
    army2[0].alive = army2[0].stats.h>0

    requestInteraction(army1[0].sprite.name).endofturn(army1[0])
    requestInteraction(army2[0].sprite.name).endofturn(army2[0])

    

    
    


    return testEndGame()

}

function summon(e, person, position, army) {
    person.army = e.army

    army.unshift(person)//army.splice(position, 0, person);
    runWalkInAni(army1, 1, 1)
    runWalkInAni(army2, -1, 1)
}

function testEndGame() {
    return (army1.length==0&&army2.length==0)?2:(Math.sign(army1.length))+(-Math.sign(army2.length))
        
    
    
}

function stepGame(i) {

    
    runDeathAbilitys()
    deleteDead()

    runWalkInAni(army1, 1, 1)
    runWalkInAni(army2, -1, 1)

    setTimeout(() => {
        
    
    
        calculateGame()
        runDeathAbilitys()
        deleteDead()

        

        setTimeout(() => {


            runWalkInAni(army1, 1, 1)
            runWalkInAni(army2, -1, 1)


            

            var result = testEndGame()
            

            /*warStageAllClear += 1

            playAnimation(smackPersons(army1[0], army2[0]), ()=>{

                warStageAllClear -= 1

            })*/

            
            if (result == 0) {
                var checkInterval = setInterval(() => {
                    if (warStageAllClear <= 0) {
                        warStageAllClear = 0
                        clearInterval(checkInterval)
                        runWalkInAni(army1, 1, 1)
                        runWalkInAni(army2, -1, 1)
                        setTimeout(() => {
                            stepGame(i+1)
                        }, 1000/pauseSpeed);
                    }
                }, 1000/30);
                
            } else {
                setTimeout(() => {
                    clearInterval(targetPosInterval)
                    endGameScreen(result, preArmy)
                }, 1000/pauseSpeed);
            }
        }, 500/pauseSpeed);

    }, 500/pauseSpeed);
}

    /*
    var aniSmashTime = ((new Date().getTime())/1000)

    var tiltInterval = setInterval(() => {
        aniTilt(army1, 1, 
            Math.min((((new Date().getTime()/1000)-aniTiltTime))/0.05, 1)
            )
        var finish = aniTilt(army2, -1, 
            Math.min((((new Date().getTime()/1000)-aniTiltTime))/0.05, 1)
            )

            updateSpritePos([...army1, ...army2])

        if (finish) {
            clearInterval(tiltInterval)
            //stepGame()
        }
    }, 1000/30);

    
    var smashInterval = setInterval(() => {
        aniSmash(army1, 1, 
            Math.min((((new Date().getTime()/1000)-aniSmashTime))/0.05, 1)
            )
        var finish = aniSmash(army2, -1, 
            Math.min((((new Date().getTime()/1000)-aniSmashTime))/0.05, 1)
            )

            ("yay")

        if (finish) {
            clearInterval(smashInterval)
            screenShake = 20
            setTimeout(() => {
                var aniBlastTime = ((new Date().getTime())/1000)
                var blastInterval = setInterval(() => {
                    if (army1[0].alive) aniBlast(army1, 1, 
                        Math.min((((new Date().getTime()/1000)-aniBlastTime))/0.2, 1)
                        )
                        if (army2[0].alive) aniBlast(army2, -1, 
                        Math.min((((new Date().getTime()/1000)-aniBlastTime))/0.2, 1)
                        )

                        var finish = Math.min((((new Date().getTime()/1000)-aniBlastTime))/0.2, 1)==1
            
            
                    if (finish) {
                        clearInterval(blastInterval)
                        if (!army1[0].alive) {
                            army1.splice(0,1)
                            for (let i = 0; i < army1.length; i++) {
                                const player = army1[i];
                                player.sprite.targetPos.x += 100
                            }
                        }

                        if (!army2[0].alive) {
                            army2.splice(0,1)
                            for (let i = 0; i < army2.length; i++) {
                                const player = army2[i];
                                player.sprite.targetPos.x -= 100
                            }
                        }

                        
                        
                        setTimeout(stepGame, 1000)
                        
                    }
                }, 1000/30);
            }, 300);
            
        }
    }, 1000/30);
}
*/