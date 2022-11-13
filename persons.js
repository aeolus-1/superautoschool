var personDetailsIndex = {
    "mitchell cox": {
        description: (e)=>{return `Buy -> Give random friend + ${e}✊ and +${e}❤️ `},
        name: "Mitchell Cox",
        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "jett boon": {
        description: (e)=>{return `Faint -> Give random friend + ${e*2}✊ and + ${e}❤️`},
        name: "Jettrin Goon",
        imageSrc:"jett_boon.png",

        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "ben reef": {
        description: (e)=>{return `Start of battle -> Deal 1🪨 to ${e} random enemy`},
        name: "Ben Reef",
        imageSrc:"ben_reef.png",

        baseStats: {
            h: 2,
            d: 2,

        },
    },
    "jai rodgers": {
        description: (e)=>{return `End turn -> give random friend + ${e}❤️`},
        name: "Jai the guy",
        imageSrc:"jai_rodgers.png",

        baseStats: {
            h: 2,
            d: 2,
        },
    },
    "liam gallagher": {
        description: (e)=>{return `Faint -> summon ${e}/${e} lambo`},
        name: "Liam Gallagher",

        imageSrc:"liam_gallagher.png",

        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "aiden venter": {
        description: (e)=>{return `Sell -> give ${e+1} random friends + 1❤️`},
        name: "Aiden Venter",
        baseStats: {
            h: 1,
            d: 1,
        },
    },
    "lily derwin": {
        description: (e)=>{return `Sell: Replace food shop with 1 free Bundy Juice that gives +${e}/+${e}`},
        name: "Lily Derwin",
        imageSrc:"lily_derwin.png",

        baseStats: {
            h: 1,
            d: 2,
        },
    },

    "patty hayes": {
        description: (e)=>{return `Hurt -> give random friend + ${e}❤️ or + ${e}✊`},
        name: "Patrick Hayes",
        imageSrc:"patty_hayes.png",
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "oscar bw":{
        imageSrc:"oscar_bw.png",
        name:"Oscar Benjamin-Wood",

    },
    "chloe rossner":{
        imageSrc:"chloe_rossner.png",
        name:"Chloe Rossner",

    },
    "corey hankinson":{
        imageSrc:"corey_hankinson.png",
        name:"Corey Hankison",
        description:(e)=>{return `Level up -> give all friends + ${e}xp`},
        stats:{
            h:2,
            d:2,
        }

    },
    "jack hildebran":{
        imageSrc:"jack_hildebran.png",
        name:"Jack Hildebran",

    },
    "jacob said":{
        imageSrc:"jacob_said.png",
        name:"Jacob Said",

    },
    "mr behan": {
        description: (e)=>{return `Faint -> Give closest friend + ${e+1}✊ and + ${e+1}❤️ and ${e} exp`},
        name: "Mr. Behan",
        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "marcus gockel": {
        description: (e)=>{return `Sell -> next roll is free`},
        name: "Marcus gockel",
        baseStats: {
            h: 4,
            d: 1,
        },
    },
    "sophie turner": {
        description: (e)=>{return `Friend summoned -> give it + ${e}❤️ and + ${e}✊ `},
        name: "Sophie Turner",
        baseStats: {
            h: 1,
            d: 2,
        },
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
        description:()=>{return "Take 1 less damage per hit"},
        held:true,
    },
   
}
function getDetails(str) {
    return {
        description:()=>{return"unDescripted"},
        name:"Untitled",
        imageSrc:"mitchell_cox.png",
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