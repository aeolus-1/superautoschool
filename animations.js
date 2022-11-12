var globalAnimationSpeed = 1,
    pauseSpeed = 1


function playAnimation(ani, then) {
    var aniTime = ((new Date().getTime())/1000),
        aniObject = ani

    var aniInterval = setInterval(() => {
        
        var finish = aniObject.func( 
            Math.min((((new Date().getTime()/1000)-aniTime))/(aniObject.time/globalAnimationSpeed), 1),
            aniObject
            )


        if (finish) {
            clearInterval(aniInterval)
            if (aniObject.object != undefined) deleteSprite(aniObject.object)
            then()
        }
    }, 1000/30);
}

function createParabola(x, d, h) {
    
    return ((x)*(x-d)*(h/0.25)*(1/(d*d)))
}

function throwApple(from, to) {
    console.log(from, to)
    return {
        func:(per, ob)=>{

            var dst = -(ob.from.pos.x-ob.to.pos.x)+0.01
            ob.object.pos.x = ob.from.pos.x+(dst*per)

            ob.object.pos.y = createParabola(dst*per, dst, 200)+(ob.from.pos.y)
            
            ob.object.rotation += 8
            //ob.object.pos.x = (x)*(x+)
            return per==1
        },
        object:createSprite({name:"apple",imageSrc:"apple.png",z:15}),
        time:1,
        from:from,
        to:to,
    }
}
function throwFist(from, to) {
    console.log(from, to)
    return {
        func:(per, ob)=>{

            var dst = -(ob.from.pos.x-ob.to.pos.x)+0.01
            ob.object.pos.x = ob.from.pos.x+(dst*per)


            ob.object.pos.y = createParabola(dst*per, dst, 200)+(ob.from.pos.y)
            
            ob.object.rotation += 8
            //ob.object.pos.x = (x)*(x+)
            return per==1
        },
        object:createSprite({name:"fist",imageSrc:"fist.png",z:15}),
        time:1,
        from:from,
        to:to,
    }
}
function smackPersons(person1, person2) {
    return {
        func:(per, ob)=>{
            console.log(per, ob)
            var p = per//Math.min(per*8, 1)
            ob.person1.sprite.targetPos.x = -110+(((p)*70))
            ob.person2.sprite.targetPos.x = 110-((p)*70)
            return per==1
        },
        time:1,
        person1:person1,
        person2:person2,
    }
}

function launchPersons(person1, person2) {
    return {
        func:(per, ob)=>{

            //if (person2.stats.h <= 0) {
            var dst = 4000

            ob.person2.sprite.targetPos.x = 40+(dst*per)
            ob.person2.sprite.targetPos.y = createParabola(-dst*per, -dst, 100)+40
            //}
            //if (person1.stats.h <= 0) {
            var dst = 4000

            ob.person1.sprite.targetPos.x = -40+(-dst*per)
            ob.person1.sprite.targetPos.y = createParabola(dst*per, dst, 100)+40
            //}
            return per==1
        },
        time:0.5,
        person1:person1,
        person2:person2,
    }
}