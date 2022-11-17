function updateSprites(sprites) {
    gameState.coins = Math.min(gameState.coins, 20)
    for (let i = 0; i < sprites.length; i++) {
        const sprite = sprites[i];
        updateSprite(sprite)
    }
}

function updateSprite(sprite) {

}