function clearShop() {
    [stonePos.shop2,stonePos.shop3,stonePos.shop4,stonePos.shopFood1,stonePos.shopFood2].forEach(s => {
        var docked = s.ele.docked
        if (docked != undefined && !docked.person.frozen) {
            deletePerson(docked.person)
        }
    });
}

var spriteLists = {
    players:[{
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
]
    
}

function genShop() {
    clearShop()
    function sP(stone, list, foodItem=false,) {
        if ((stone.ele.docked!=undefined)?!stone.ele.docked.person.frozen:true) {

        var person = createPerson({sprite:list[randInt(0,list.length-1)], foodItem:foodItem}),
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
    /*placeSpriteInStone(createSprite({
        name:"ben reef",
        imageSrc:"ben_reef.png",
        hoverImageSrc:"ben_reef.png",
    }), stonePos.shop4)*/
    
}