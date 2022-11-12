var defualtIndex = {
    ongamestart:function(){console.log("start")},
    onfaint:function(){console.log("faint")},
    onfriendsummoned:function(){console.log("friendsummoned")},
    endofturn:function(){},

    onsell:function(){console.log("sold me")},
    onbuy:function(){console.log("bought me")},
    onupgrade:function(){console.log("upgraded me")},
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
        fris = (e.army == army1)?army2:army1

    for (let i = 0; i < amount; i++) {
        if (fris.length <= 0) return friendsList
        var num = randInt(0, fris.length-1),
            returnOb = fris[num]
        friendsList.push(returnOb)
    }

    return friendsList
    
        
    
}
function giveHealth(e, self, amount) {
    e.stats.h += amount
    warStageAllClear += 1
    playAnimation(throwApple(self.sprite, e.sprite), ()=>{
        warStageAllClear -= 1
    })
}
function giveAttack(e, self, amount) {
    e.stats.d += amount
    warStageAllClear += 1

    playAnimation(throwFist(self.sprite, e.sprite), ()=>{
        warStageAllClear -= 1
    })
}
function dealDamage(e, self, amount) {
    e.stats.h -= amount
    warStageAllClear += 1

    playAnimation(throwFist(self.sprite, e.sprite), ()=>{
        warStageAllClear -= 1
    })
}
var personIndex = {
    "mitchell cox":{
        onbuy:function(e){
            var friend = randomFriend(e, 1)
            if (friend[0] != undefined) {
                giveHealth(friend[0], e, 1)
                giveAttack(friend[0], e, 1)
            }
            
        }
    },
    "jett boon": {
        onfaint:function(e) {
            var friend = randomFriend(e, 1)
            if (friend[0] != undefined) {
                giveHealth(friend[0], e, 1)
                giveAttack(friend[0], e, 2)
            }
        }
    },
    "ben reef":{
        ongamestart:function(e){
            console.log("attack")
            
            var enemys = randomEnemy(e, 1)
            dealDamage(enemys[0], e, 1)
            
            //console.log(randomEnemy(e, 1))
            
        }
    },
    "jai rodgers":{
        endofturn:function(e) {
            var friend = randomFriend(e, 1)
            if (friend[0] != undefined) {
                giveHealth(friend[0], e, 1)
            }
        },
    },
    "liam gallagher":{
        onfaint:function(e){
            summon(
                e,
                createPerson({
                    sprite:{
                        name:"lambo",
                        imageSrc:"lambo.png"
                    },
                    stats:{
                        h:1,
                        d:1,
                    }
                }),
                0,
                e.army
            )

            
            
            
        }
    },
    "aiden venter":{
        onsell:function(e){
            var friends = randomFriend(e, 2)
            friends.forEach(fri => {
                giveHealth(fri, e, 1)
            });
        },
    },
    "lily derwin":{
        onsell:function(e){

        }
    },
    "patty hayes":{
        onbuy:function(e){
            var friends = randomFriend(e, 2)
            console.log(friends)
            friends.forEach(fri => {
                giveHealth(fri, e, 1)
            });
            
            
        }
    },
    "oscar bw":{
        
    },
    "marcus gockel":{
        onsell:function(){
            rollCost = 0
        }
    }
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


