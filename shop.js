function clearShop() {
    [stonePos.shop2,stonePos.shop3,stonePos.shop4,stonePos.shopFood1,stonePos.shopFood2].forEach(s => {
        var docked = s.ele.docked
        if (docked != undefined && (docked.person!=undefined)?!docked.person.frozen:false) {
            deletePerson(docked.person)
        }
    });
}

var spriteLists = {
    players:[
    {
        name:"clancy reed",
        imageSrc:"clancy_reed.png"
    },    
    {
        name:"ben reef",
        imageSrc:"ben_reef.png",
    },
    {
        name:"jai rodgers",
        imageSrc:"jai_rodgers.png",
    },
    {
        name:"oscar bw",
        imageSrc:"oscar_bw.png",
    },
    {
        name:"chloe rossner",
        imageSrc:"chloe_rossner.png",
    },
    {
        name:"jett boon",
        imageSrc:"jett_boon.png",
    },
    {
        name:"aiden venter",
        imageSrc:"aiden_venter.png",
    },
    {
        name:"patty hayes",
        imageSrc:"patty_hayes.png",
    },
    {
        name:"corey hankinson",
        imageSrc:"corey_hankinson.png",
    },
    {
        name:"jack hildebran",
        imageSrc:"jack_hildebran.png",
    },
    {
        name:"jacob said",
        imageSrc:"jacob_said.png",
    },
    {
        name:"liam gallagher",
        imageSrc:"liam_gallagher.png",
    },
    {
        name:"lily derwin",
        imageSrc:"lily_derwin.png",
    },
    {
        name:"marcus gockel",
        imageSrc:"marcus_gockel.png",
    },
    {
        name:"mr behan",
        imageSrc:"mr_behan.png",
    },
    {
        name:"sophie turner",
        imageSrc:"sophie_turner.png",
    },
    {
        name:"ashwin s",
        imageSrc:"ashwin_s.png",
    },
    {
        name:"rylan holding",
        imageSrc:"rylan_holding.png",
    },
    
    {}],
    food:[
    {
        name:"chip salt",
        imageSrc:"chip_salt.png",
    },
    {
        name:"calippo",
        imageSrc:"calippo.png",
    },
    {
        name:"bundy juice",
        imageSrc:"bundy_juice.png",
    },
    {
        name:"basil",
        imageSrc:"basil.png",
    },
    {
        name:"jelly",
        imageSrc:"jelly.png",
    },
    {
        name:"chip chicken",
        imageSrc:"chip_chicken.png"

    }
]
    
}

function getPlayersofTier(players) {
    var tierList = {
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
        6:[],
    }
    for (let i = 0; i < players.length; i++) {
        const player = players[i];
        tierList[getDetails(player.name).tier].push(player)
    }
    return tierList
}

function genShop(frozenIndivuals=[]) {
    clearShop()
    function sP(stone, list, foodItem=false,) {
        if ((stone.ele.docked!=undefined)?!stone.ele.docked.person.frozen:true) {
        var tierChances = []
        for (let i = 0; i < 6; i++) {
            tierChances.push(
                [(1-((1-getChances(Math.min(gameState.turn, 9), i+1))*0.75))*Math.random(), i]
            )
        }
        var choosenTier = tierChances.sort((a,b)=>{return a[0]-b[0]})[5][1],
            possiblePlayers = getPlayersofTier(spriteLists.players)[choosenTier+1]
            console.log(possiblePlayers, choosenTier)
        var person = createPerson({sprite:foodItem?list[randInt(0,list.length-1)]:possiblePlayers[randInt(0,possiblePlayers.length-1)], foodItem:foodItem}),
            sprite = person.sprite

        sprite.inShop = true
        if(foodItem) {
            
        }


        placeSpriteInStone(sprite, stone)
    }

    }

    sP(stonePos.shop2, spriteLists.players)
    sP(stonePos.shop3, spriteLists.players)
    sP(stonePos.shop4, spriteLists.players)

    sP(stonePos.shopFood1, spriteLists.food, true)
    sP(stonePos.shopFood2, spriteLists.food, true)


    console.log(frozenIndivuals)
    for (let i = 0; i < frozenIndivuals.length; i++) {
        const person = frozenIndivuals[i];
        var stone = stonePos[person.stone.name]
        deletePerson(stone.ele.docked.person)
        

        var newPerson = createPerson({
            sprite:{
                name:person.name,
                imageSrc:`${person.name.replace(" ", "_")}.png`,

            },
            frozen:true,
            foodItem:(person.stone.name.includes("Food")),
            stats:person.stats,
        })
        newPerson.sprite.inShop = true
        placeSpriteInStone(newPerson.sprite, stone)
    }
    /*placeSpriteInStone(createSprite({
        name:"ben reef",
        imageSrc:"ben_reef.png",
        hoverImageSrc:"ben_reef.png",
    }), stonePos.shop4)*/
    
}