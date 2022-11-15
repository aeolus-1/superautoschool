var personDetailsIndex = {
    "mitchell cox": {
        description: (e)=>{return `Buy -> Give random friend + ${e}✊ and +${e}❤️ `},
        name: "Mitchell Cox",
        tier:2,
        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "jett boon": {
        description: (e)=>{return `Faint -> Give random friend + ${e*2}✊ and + ${e}❤️`},
        name: "Jettrin Goon",
        imageSrc:"jett_boon.png",
        tier:2,
        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "ben reef": {
        description: (e)=>{return `Start of battle -> Deal 1🪨 to ${e} random enemy`},
        name: "Ben Reef",
        imageSrc:"ben_reef.png",
        tier:3,
        baseStats: {
            h: 2,
            d: 2,

        },
    },
    "jai rodgers": {
        description: (e)=>{return `End turn -> give random friend + ${e}❤️`},
        name: "Jai the guy",
        imageSrc:"jai_rodgers.png",
        tier:4,
        baseStats: {
            h: 2,
            d: 2,
        },
    },
    "liam gallagher": {
        description: (e)=>{return `Faint -> summon ${e}/${e} lambo`},
        name: "Liam Gallagher",
        tier:4,
        imageSrc:"liam_gallagher.png",

        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "aiden venter": {
        description: (e)=>{return `Sell -> give 2 random friends + ${e}❤️`},
        name: "Aiden Venter",
        tier:1,
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "lily derwin": {
        description: (e)=>{return `Sell: Replace food shop with 1 free Bundy Juice that gives +${e}/+${e}`},
        name: "Lily Derwin",
        imageSrc:"lily_derwin.png",
        tier:4,
        baseStats: {
            h: 1,
            d: 2,
        },
    },

    "patty hayes": {
        description: (e)=>{return `Hurt -> give random friend + ${e}❤️ or + ${e}✊`},
        name: "Patrick Hayes",
        imageSrc:"patty_hayes.png",
        tier:5,
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "oscar bw": {
        description: (e)=>{return`End Turn -> if holding food item then gain + ${e}❤️ and + ${e}✊`},
        name: "Oscae Benjamin-Wood",
        imageSrc:"oscar_bw.png",
        tier:6,
        baseStats: {
            h: 4,
            d: 6,
        },
    },
    "chloe rossner": {
        description: (e)=>{return`Faint -> summon enemy ${e}/${e} Greenie`},
        name: "Chloe Rossner",
        imageSrc:"chloe_rossner.png",
        tier:5,
        baseStats: {
            h: 4,
            d: 3,
        },
    },
    "corey hankinson":{
        imageSrc:"corey_hankinson.png",
        name:"Corey Hankison",
        description:(e)=>{return `Level up -> give all friends + ${e}xp`},
        tier:2,
        stats:{
            h:2,
            d:2,
        }

    },
   
    "mr behan": {
        description: (e)=>{return `Faint -> Give closest friend + ${e+1}✊ and + ${e+1}❤️ and ${e} exp`},
        name: "Mr. Behan",
        tier:1,
        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "marcus gockel": {
        description: (e)=>{return `Sell -> next roll is free`},
        name: "Marcus gockel",
        tier:1,
        baseStats: {
            h: 4,
            d: 1,
        },
    },
    "sophie turner": {
        description: (e)=>{return `Friend summoned -> give it + ${e}❤️ and + ${e}✊ `},
        name: "Sophie Turner",
        tier:4,
        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "jack hildebran": {
        description: (e)=>{return `No ability, just raw strength`},
        name: "Jack Hildedad",
        tier:5,
        baseStats: {
            h: 5,
            d: 5,
        },
    },
    "jacob said": {
        description: (e)=>{return `Enemy Summoned -> deal 1🪨 to 2 random enemys`},
        name: "Jacob Said",
        tier:4,
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "ashwin s": {
        description: (e)=>{return `Hurt -> Give +${e} coin`},
        name: "Curry Guzzuler",
        tier:3,
        baseStats: {
            h: 1,
            d: 1,
        },
    },
    "rylan holding":{
        imageSrc:"rylan_holding.png",
        name:"Rylan Holding",
        description:(e)=>{return `Does somehting later`},
        tier:1,
        stats:{
            h:2,
            d:2,
        }

    },
    "clancy reed":{
        imageSrc:"clancy_reed.png",
        name:"Clancy Reef",
        description:(e)=>{return `Start of Battle => Deal ${e}00% of damage to random enemy`},
        tier:6,
        stats:{
            h:4,
            d:5,
        }

    },
   

}

var foodDetailsIndex = {
    "bundy juice":{
        name:"Bundy Juice",
        description:()=>{return "Gives + 1✊ and + 1❤️"},
        stats:{
            d:1,
            h:1,
        }
    },
    "chip salt":{
        name:"Red Rock Deli Chips ",
        description:()=>{return "Gives + 2✊"},
        stats:{
            d:2,
            h:0,
        }
    },
    "chip chicken":{
        name:"Red Rock Chicken Deli Chips ",
        description:()=>{return "Gives + 2❤️"},
        imageSrc:"chip_chicken.png",
        stats:{
            d:0,
            h:2,
        }
    },
    "calippo":{
        name:"Calippo",
        description:()=>{return "Gives - 1❤️ and + 3✊"},
        stats:{
            h:-1,
            d:3,
        }
    },
    "basil":{
        name:"Basil",
        description:()=>{return "Take 1 less damage per hit"},
        held:true,
    },
    "jelly":{
        name:"Jelly",
        description:()=>{return `Gain + 3❤️ and + 3✊ for one attack`},
        held:true,
    },
   
}
function getDetails(str) {
    return {
        description:()=>{return"unDescripted"},
        name:"Untitled",
        imageSrc:"mitchell_cox.png",
        tier:1,
        baseStats:{
            h:1,
            d:1,
        },

        ...personDetailsIndex[str],
    }
}

function getFoodDetals(str) {
    return {
        description:()=>{return "unDescripted"},
        name:"Untitled",
        stats:{
            h:1,
            d:1,
        },
        held:false,

        ...foodDetailsIndex[str],
    }
}
