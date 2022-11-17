function getChances(turn, tier) {
    let length = (10),
        tierStep = 3

var t = (tier*tierStep)-tierStep,
    v = turn,
    c = ((length+t)-v)/length
return (c>0&&c<=1)?c:0



}
