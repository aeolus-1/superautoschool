var defualtIndex = {
    ongamestart:function(){console.log("start")},
    onfaint:function(){console.log("faint")},
    onfriendsummoned:function(){},
    onenemysummoned:function(){},
    endofturn:function(){},
    onhurt:function(){},

    onsell:function(){console.log("sold me")},
    onbuy:function(){console.log("bought me")},
    onupgrade:function(){console.log("upgraded me")},
    onlevelup:function(){},
    onendgameturn:function(){},
},
    defaultFoodIndex = {
        incomeDamageMod:0,
        endofturn:function(){},
        ongamestart:function(){},
    }

function getFriends(e, army) {
    var friends = []
    for (let i = 0; i < army.length; i++) {
        const person = army[i];
        if (person.sprite.id != e.sprite.id) {
            friends.push(person)
        }
    }
    return friends
}

function randomFriend(e, amount) {

    var friendsList = new Array(),
        fris = getFriends(e, e.army)

        for (let i = 0; i < amount; i++) {
        if (fris.length <= 0) return friendsList
        var num = randInt(0, fris.length-1),
            returnOb = fris[num]
        friendsList.push(returnOb)
        fris.splice(num, 1)
    }

    return friendsList
    
        
    
}
function randomEnemy(e, amount) {

    var friendsList = new Array(),
        fris = shuffle([...(e.army == army1)?army2:army1])

    for (let i = 0; i < amount; i++) {
        if (fris.length <= 0) return friendsList
        var num = randInt(0, fris.length-1),
            returnOb = fris[num]
        friendsList.push(returnOb)
    }




    return fris.sort((a, b) => 0.5 - Math.random());
    
        
    
}
function replaceShopItem(e, num, item) {
    warStageAllClear+= 1
        playAnimation(throwItem(item.sprite.render.src, e.sprite, stonePos[`shopFood${num}`].ele), ()=>{
            gameState.coins += 3

            var stone = stonePos[`shopFood${num}`].ele
            deletePerson(stone.docked.person)
            item.sprite.render.visible = true
            placeSpriteInStone(item.sprite, stonePos[`shopFood${num}`])
    
            warStageAllClear -= 1
        })
}
function giveCoins(e, amount) {
    if (e.sprite.pos.x < 0) {
        warStageAllClear+= 1
        playAnimation(throwItem("icons/coin.png", e.sprite, gui["player1-text"]), ()=>{
            gameState.coins += amount
            gui["player1-text"].render.targetScaleV = 0.9
            gui["coins-icon"].render.targetScaleV += 1
    
            warStageAllClear -= 1
        })
    }
}
function giveHealth(e, self, amount) {
    warStageAllClear += 1
    playAnimation(throwItem("apple.png", self.sprite, e.sprite), ()=>{
        e.stats.h += amount

        e.sprite.render.targetScaleV += 0.5


        warStageAllClear -= 1
    })
}
function giveAttack(e, self, amount) {
    warStageAllClear += 1

    playAnimation(throwItem("fist.png",self.sprite, e.sprite), ()=>{
        e.stats.d += amount

        e.sprite.render.targetScaleV += 0.5

        warStageAllClear -= 1
    })
}
function dealDamage(e, self, amount) {
    warStageAllClear += 1

    requestInteraction(e.sprite.name).onhurt(e)
    

    playAnimation(throwItem("fist.png", self.sprite, e.sprite), ()=>{
        e.stats.h -= amount+(requestFoodInteraction(e.heldFood).incomeDamageMod)
        screenShake += 5
        warStageAllClear -= 1
    })
}
function giveXp(e, self, amount) {
    warStageAllClear += 1

    playAnimation(throwItem("xp.png",self.sprite, e.sprite), ()=>{
        givePersonXp(e, amount)

        e.sprite.render.targetScaleV += 1

        warStageAllClear -= 1
    })
}
var personIndex = {
    "mitchell cox":{
        onbuy:function(e){
            var friend = randomFriend(e, 1)
            if (friend[0] != undefined) {
                giveHealth(friend[0], e, e.level)
                giveAttack(friend[0], e, e.level)
            }
            
        }
    },
    "jett boon": {
        onfaint:function(e) {
            var friend = randomFriend(e, 1)
            if (friend[0] != undefined) {
                giveHealth(friend[0], e, e.level*2)
                giveAttack(friend[0], e, e.level)
            }
        }
    },
    "ben reef":{
        ongamestart:function(e){
            for (let i = 0; i < e.level; i++) {
                setTimeout(() => {
                    var enemys = randomEnemy(e, 1)

                    dealDamage(enemys[0], e, 1)
                }, 300*i);
                
            }
            
            

            
        }
    },
    "jai rodgers":{
        onendgameturn:function(e) {
            
            var friends = randomFriend(e, e.level)
            friends.forEach(fri => {
                giveHealth(fri, e, 1)
            });
        },
    },
    "liam gallagher":{
        onfaint:function(e, newSummons){
            console.log(e)
            var p = createPerson({
                    sprite:{
                        name:"lambo",
                        imageSrc:"lambo.png",
                        pos:{...e.sprite.pos},

                    },
                    stats:{
                        h:e.level,
                        d:e.level,
                    },
                })
                p.army = e.army
                newSummons.push(p)
                console.log(newSummons)

            
            
            
        }
    },
    "aiden venter":{
        onsell:function(e){
            var friends = randomFriend(e, e.level+1)
            friends.forEach(fri => {
                giveHealth(fri, e, 2)
            });
        },
    },
    "lily derwin":{
        onsell:function(e){
            replaceShopItem(e, 1, createPerson(
                {sprite:{
                    name:"bundy juice",
                    imageSrc:"bundy_juice.png",
                    visible:false,
                }, foodItem:true}
            ))
        }
    },
    "patty hayes":{
        onhurt:function(e){
            var friend = randomFriend(e, 1)
            if (friend[0] != undefined) {
                ((randInt(0,1)==0)?giveHealth:giveAttack)(friend[0], e, e.level)
            }
            
            
        }
    },
    "oscar bw":{
        ongamestart:function(e){
            if (e.heldFood != undefined) {
                giveHealth(e, e, e.level)
                giveAttack(e, e, e.level)
            }
        }
    },
    "marcus gockel":{
        onsell:function(){
            rollCost = 0
        }
    },
    "corey hankinson":{
        onlevelup:function(e){
            //giveXp
            var fri = getFriends(e, e.army)
            for (let i = 0; i < fri.length; i++) {
                const friend = fri[i];
                giveXp(friend, e, e.level)
            }
        }
    },
    "sophie turner":{
        onfriendsummoned:function(e, summoned) {
            giveHealth(summoned, e, e.level)
            giveAttack(summoned, e, e.level)
        }
    },
    "chloe rossner":{
        onfaint:function(e, newSummons1, newSummons2){
            console.log(e)
            var p = createPerson({
                    sprite:{
                        name:"greenie",
                        imageSrc:"greenie.png",
                        pos:{...e.sprite.pos},

                    },
                    stats:{
                        h:e.level,
                        d:e.level,
                    },
                })
                p.army = (e.army == army1)?army2:army1
                newSummons2.push(p)

            
            
            
        
        },
        
    },
    "mr behan":{
        onfaint:function(e){

            var pos = 0
            for (let i = 0; i < e.army.length; i++) {
                const fri = e.army[i];
                console.log(fri, e)
                if (fri.sprite.element.id == e.sprite.element.id) {
                    pos = i
                    break
                }
            }
            console.log(pos)
            
            if (e.army[pos+1]!=undefined) {
                if (e.army[pos+1].sprite!=undefined) {
                giveHealth(e.army[pos+1], e, 2)
                giveAttack(e.army[pos+1], e, 1)
                }
            }
        }
    },
    "jacob said":{
        onenemysummoned:function(e, summon){
            for (let i = 0; i < e.level+1; i++) {
                var enemys = randomEnemy(e, 1)
                dealDamage(enemys[0], e, 1)
            }
        }
    },
    "ashwin s":{
        onhurt:function (e) {
            giveCoins(e, e.level)
        }
    },
    "clancy reed":{
        ongamestart:function(e){
            
                var enemys = randomEnemy(e, 1)

                dealDamage(enemys[0], e, Math.floor(e.stats.d*((e.level+1)*0.5)))
                
            }
            
            

            
        
    }
    
}

var foodIndex = {
    "basil":{
        incomeDamageMod:-1,
    },
    "jelly":{
        endofturn:function(e, turn) {
            e.stats.h -= 3
            e.stats.d -= 3
            
            e.heldFood = undefined
            e.heldFoodSprite.render.visible = false
        },
        ongamestart:function(e) {
            giveAttack(e, e, 3)
            giveHealth(e, e, 3)
            
        }
    },
}

function requestInteraction(name) {
    if (personIndex[name]==undefined) {
        return defualtIndex
    } else {
        return {
            ...defualtIndex,
            ...personIndex[name],
        }
    }
}

function requestFoodInteraction(name) {
    if (foodIndex[name]==undefined) {
        return defaultFoodIndex
    } else {
        return {
            ...defaultFoodIndex,
            ...foodIndex[name],
        }
    }
}


