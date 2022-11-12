var sprites = new Array(),
    persons = new Array(),
    texts = new Array()


function render() {
    loadSpritesToScreen(sprites)
    loadText(texts)

    requestAnimationFrame(render)
}

render()
//document.onload = ()=>{render()}


setInterval(()=>{
    updateSprites(sprites)
    updateGui()
    runScreenShake()
}, 1000/30)


startGame()


//document.body.ondrop = (e)=>{console.log(e)}

