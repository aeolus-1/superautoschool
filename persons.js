var personDetailsIndex = {
    "mitchell cox": {
        description: (e)=>{return `Buy -> Give random friend + ${e}✊ and +${e}❤️ `},
        name: "Mitchell Cox",
        tier:1,
        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "jett boon": {
        description: (e)=>{return `Faint -> Give random friend + ${e*2}✊ and + ${e}❤️`},
        name: "Jettrin Goon",
        imageSrc:"jett_boon.png",
        tier:1,
        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "ben reef": {
        description: (e)=>{return `Start of battle -> Deal 1🪨 to ${e} random enemy`},
        name: "Ben Reef",
        imageSrc:"ben_reef.png",
        tier:1,
        baseStats: {
            h: 2,
            d: 2,

        },
    },
    "jai rodgers": {
        description: (e)=>{return `End turn -> give random friend + ${e}❤️`},
        name: "Jai the guy",
        imageSrc:"jai_rodgers.png",
        tier:3,
        baseStats: {
            h: 4,
            d: 3,
        },
    },
    "liam gallagher": {
        description: (e)=>{return `Faint -> summon ${5*e}/${5*e} lambo with splash attack`},
        name: "Liam Gallagher",
        tier:4,
        imageSrc:"liam_gallagher.png",

        baseStats: {
            h: 1,
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
        description: (e)=>{return `Sell: Replace food shop with 1 free peach Juice that gives +${e}/+${e}`},
        name: "Lily Derwin",
        imageSrc:"lily_derwin.png",
        tier:1,
        baseStats: {
            h: 1,
            d: 2,
        },
    },

    "patty hayes": {
        description: (e)=>{return `Hurt -> give random friend + ${2*e}❤️ and + ${3*e}✊`},
        name: "Patrick Hayes",
        imageSrc:"patty_hayes.png",
        tier:5,
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "oscar bw": {
        description: (e)=>{return`End Turn -> if holding food item then gain + ${1+e}❤️ and + ${1+e}✊`},
        name: "Oscae Benjamin-Wood",
        imageSrc:"oscar_bw.png",
        tier:6,
        baseStats: {
            h: 4,
            d: 6,
        },
    },
    "chloe rossner": {
        description: (e)=>{return`Faint -> summon ${e} enemy 1/1 Greenie`},
        name: "Chloe Rossner",
        imageSrc:"chloe_rossner.png",
        tier:2,
        baseStats: {
            h: 4,
            d: 3,
        },
    },
    "corey hankinson":{
        imageSrc:"corey_hankinson.png",
        name:"Corey Hankison",
        description:(e)=>{return `Level up -> give all friends + ${e}xp`},
        tier:1,
        stats:{
            h:2,
            d:2,
        }

    },
   
    "mr behan": {
        description: (e)=>{return `Faint -> Summon ${e}/${e} Odin`},
        name: "Mr. Behan",
        tier:1,
        baseStats: {
            h: 2,
            d: 1,
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
        tier:2,
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
            h: 7,
            d: 7,
        },
    },
    "jacob said": {
        description: (e)=>{return `Enemy Summoned -> deal 4🪨 to 2 random enemys`},
        name: "Jacob Said",
        tier:4,
        baseStats: {
            h: 5,
            d: 4,
        },
    },
    "ashwin s": {
        description: (e)=>{return `Hurt -> Give +${e} coin`},
        name: "Curry Guzzuler",
        tier:3,
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "rylan holding":{
        imageSrc:"rylan_holding.png",
        name:"Rylan Holding",
        description:(e)=>{return `Enemy Summoned -> deal ${e} 🪨 to it`},
        tier:1,
        stats:{
            h:3,
            d:1,
        }

    },
    "clancy reed":{
        imageSrc:"clancy_reed.png",
        name:"Clancy Reef",
        description:(e)=>{return `Start of Battle => Deal ${((e+1)*0.5)*100}% of damage to random enemy`},
        tier:6,
        stats:{
            h:4,
            d:5,
        }

    },
    "lachlen able":{
        imageSrc:"lachlen_able.png",
        name:"One able lachlen",
        description:(e)=>{return `Before Attack -> Gain + ${2*e}❤️ and + ${3*e}✊`},
        tier:6,
        stats:{
            h:3,
            d:5,
        }

    },
    "jake bujis":{
        imageSrc:"jake_bujis.png",
        name:"Jake Bujis",
        description:(e)=>{return `Adds 4th pedestal to shop (adds 3rd pedestal for food when level 3)`},
        tier:6,
        stats:{
            h:5,
            d:6,
        }

    },
    "samual tarling":{
        imageSrc:"samual_tarling.png",
        name:"Samual Tarling",
        description:(e)=>{return `End Turn -> if there is an empty space in your team then gain + ${2*e}❤️ and + ${2*e}✊`},
        tier:6,
        stats:{
            h:4,
            d:4,
        }

    },
    "edan gatley":{
        imageSrc:"edan_gatley.png",
        name:"Edan Gatley",
        description:(e)=>{return `Before Attack -> deal 1 🪨 to closest friend behind ${e} time(s)`},
        tier:2,
        stats:{
            h:3,
            d:2,
        }

    },
    "herm":{
        imageSrc:"herm.png",
        name:"Herm",
        description:(e)=>{return `The Hound`},
        tier:10,
        stats:{
            h:1,
            d:1,
        }

    },
    "odin":{
        imageSrc:"odin.png",
        name:"Odin",
        description:(e)=>{return `The Other Hound`},
        tier:10,
        stats:{
            h:1,
            d:1,
        }

    },

    "trevor":{
        imageSrc:"trevor.png",
        name:"Chef Trev",
        description:(e)=>{return `Food with Health, Attack or xp effects are ${1+e} times stronger.`},
        tier:6,
        stats:{
            h:5,
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
            xp:0,
        }
    },
    "chip salt":{
        name:"Red Rock Deli Chips ",
        description:()=>{return "Gives + 2✊"},
        stats:{
            d:2,
            h:0,
            xp:0,
        }
    },
    "pizza":{
        name:"Pizza",
        description:()=>{return `Gives + 1xp`},
        stats:{
            d:0,
            h:0,
            xp:1,
        }
    },
    "chip chicken":{
        name:"Red Rock Chicken Deli Chips ",
        description:()=>{return "Gives + 2❤️"},
        imageSrc:"chip_chicken.png",
        stats:{
            d:0,
            h:2,
            xp:0,
        }
    },
    "calippo":{
        name:"Calippo",
        description:()=>{return "Gives - 1❤️ and + 3✊"},
        stats:{
            h:-1,
            d:3,
            xp:0,
        }
    },
    "icey pole":{
        name:"Icey Pole",
        description:()=>{return "Gives +3❤️ and -1✊"},
        stats:{
            h:3,
            d:-1,
            xp:0,
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
    "collar":{
        name:"Dog Collar",
        imageSrc:"collar.png",
        description:()=>{return `Faint => Summon a 1/1 Hermione`},
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
            xp:0,
        },
        held:false,

        ...foodDetailsIndex[str],
    }
}
