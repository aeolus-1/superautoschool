function getChances(turn, tier) {
        let length = (10)
    
    var t = tier-1,
        v = (turn-((t)*2)+1)
    return Math.max(v<0?0:(length+1)-v, 0)/length
    
    
    
}