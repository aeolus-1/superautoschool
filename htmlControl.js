var htmls = {
  sprite: function (e) {
    return `<img class="nonDraggableImage" ondragover="allowDrop(event)" ondragstart="dragstart(event)" ondrop="drop(event)" onmouseover="hover(this);" onmouseout="unhover(this);" onmousedown="clickSprite(event)" src="imgs/${e.render.src}">`;
  },
  text: function (e) {
    return `<span>${e.content}</span>`;
  },
};

var screenShake = 1;

var htmlSize = v(1680, 939);

function createSpriteHTML(options) {
  var ele = createElementFromHTML(htmls.sprite(options));
  document.body.appendChild(ele);
  return ele;
}
function createElementFromHTML(htmlString) {
  var div = document.createElement("div");
  div.innerHTML = htmlString;
  // Change this to div.childNodes to support multiple top-level nodes.
  var c = div.firstChild;
  c.id = Math.random();
  return c;
}

document.onmousedown = (e) => {
  var yes = false;
  if (e.path[0].sprite) {
    if (e.path[0].sprite.person) {
      yes = true;
    }
  }
  if (!yes) {
    selectedSprite = undefined;
    gameHighlight.pos = v(-10000, -10000);
    gui["sell"].render.visible = false;
    gui["freeze"].render.visible = false;
  }
};

function hover(element) {
  if (element.sprite.person != undefined) {
    element.sprite.person.ability.render.visible = true;
    element.sprite.person.abilityText.render.visible = true;
    element.sprite.person.nameText.render.visible = true;
  }
  if (element.sprite.render.highlighable && !selectedSprite)
    gameHighlight.pos = { ...element.sprite.pos };
  if (element.sprite.render.hoverSrc)
    element.setAttribute("src", "imgs/" + element.sprite.render.hoverSrc);
}

function unhover(element) {
  if (element.sprite.person != undefined) {
    element.sprite.person.ability.render.visible = false;
    element.sprite.person.abilityText.render.visible = false;
    element.sprite.person.nameText.render.visible = false;

  }
  if (element.sprite.render.hoverSrc)
    element.setAttribute("src", "imgs/" + element.sprite.render.src);
  if (!selectedSprite) gameHighlight.pos = v(-10000, -10000);
}

function drop(e) {
  var data = e.dataTransfer.getData("text").split("/");
  console.log(data);
  var element = document.getElementById(data[0]),
    sourceStone = document.getElementById(data[1]);

  console.log("drop");
  console.log(makingPurchase, droppingFood)
  if ((makingPurchase)?makePurchase(3):true) {
    if (droppingFood) {
        e.srcElement.sprite.person.frozen = false
        e.srcElement.sprite.person.stats.h += 1
        e.srcElement.sprite.person.stats.d += 1

        playAnimation(throwApple(e.srcElement.sprite, e.srcElement.sprite), ()=>{})

        deletePerson(element.sprite.person)
        selectedSprite = undefined;
        gameHighlight.pos = v(-10000, -10000);
    } else {
        
        if (!e.srcElement.sprite.srcStone.ele.docked) {
        gui["sell"].render.visible = false;
        gui["freeze"].render.visible = false;
        sourceStone.sprite.docked = undefined;

        selectedSprite.person.frozen = false;

        selectedSprite = undefined;
        gameHighlight.pos = v(-10000, -10000);
        placeSpriteInStone(element.sprite, e.srcElement.sprite.srcStone);
        army1.push(element.sprite.person)
        element.sprite.person.army = army1
        if (makingPurchase) {
            requestInteraction(element.sprite.name).onbuy(element.sprite.person)

        }

        element.sprite.inShop = false;

        
        }
    }
}

  //placeSpriteInStone(element.sprite, )
  //  = {...e.srcElement.sprite.pos}
}
var droppingFood = false,
    makingPurchase = false
function ondrop(ev) {
  //ev.preventDefault();
  //var data = ev.dataTransfer.getData("text");
  //console.log(data)
  //ev.target.appendChild(document.getElementById(data));
}

function allowDrop(ev) {
  if (droppingFood && ev.srcElement.sprite.person != undefined) {
    ev.preventDefault();
  }
  if (ev.srcElement.sprite.droppable && !droppingFood) {
    ev.preventDefault();
  }
}
function dragstart(ev) {
  droppingFood = ev.target.sprite.person.foodItem;
  makingPurchase = ev.target.sprite.inShop
  console.log(ev.target.id);
  ev.dataTransfer.setData(
    "text",
    `${ev.target.id}/${ev.target.sprite.dockedIn.element.id}`
  );
  ev.target.sprite.person.ability.render.visible = false;
  ev.target.sprite.person.abilityText.render.visible = false;
  ev.target.sprite.person.nameText.render.visible = false;

}
