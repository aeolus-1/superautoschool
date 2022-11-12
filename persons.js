var personDetailsIndex = {
    "mitchell cox": {
        description: "Buy -> Give random friend + 1✊ and +1❤️ ",
        name: "Mitchell Cox",
        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "jett boon": {
        description: "Faint -> Give random friend + 2✊ and + 1❤️",
        name: "Jettrin Goon",
        imageSrc:"jett_boon.png",

        baseStats: {
            h: 1,
            d: 2,
        },
    },
    "ben reef": {
        description: "Start of battle -> Deal 1🪨 to 1 random enemy",
        name: "Ben Reef",
        imageSrc:"ben_reef.png",

        baseStats: {
            h: 2,
            d: 2,

        },
    },
    "jai rodgers": {
        description: "End turn -> give random friend + 1❤️",
        name: "Jai the guy",
        imageSrc:"jai_rodgers.png",

        baseStats: {
            h: 2,
            d: 2,
        },
    },
    "liam gallagher": {
        description: "Faint -> summon 1/1 lambo",
        name: "Liam Gallagher",

        imageSrc:"liam_gallagher.png",

        baseStats: {
            h: 2,
            d: 1,
        },
    },
    "aiden venter": {
        description: "Sell -> give 2 random friends + 1❤️",
        name: "Aiden Venter",
        baseStats: {
            h: 3,
            d: 2,
        },
    },
    "lily derwin": {
        description: "Sell: Replace food shop with 1 free Bundy Juice that give +1/+1",
        name: "Lily Derwin",
        imageSrc:"lily_derwin.png",

        baseStats: {
            h: 1,
            d: 2,
        },
    },

    "patty hayes":{
        imageSrc:"patty_hayes.png",
        description:"",
        name:"Patty Hayes",

        baseStats:{
            h:2,
            d:2,
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

    },
    "jack hildebran":{
        imageSrc:"jack_hildebran.png",
        name:"Jack Hildebran",

    },
    "jacob said":{
        imageSrc:"jacob_said.png",
        name:"Jacob Said",

    },
    "marcus gockel":{
        imageSrc:"marcus_gockel.png",
        name:"Marcus Gockel",

    },
    "mr behan":{
        imageSrc:"mr_behan.png",
        name:"Mr Behan",

    },
}

var foodDetailsIndex = {
    "bundy juice":{
        name:"Bundy Juice",
        descriptions:"Food",
    },
   
}
function getDetails(str) {
    return {
        description:"unDescripted",
        name:"Untitled",
        imageSrc:"mitchell_cox.png",
        baseStats:{
            h:1,
            d:1,
        },

        ...personDetailsIndex[str],
    }
}
