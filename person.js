class Person {
    constructor(options) {
        this.options = {
            stats:{...getDetails(options.sprite.name).baseStats},

            foodItem:false,

            frozen:false,
            level:1,
            xp:0,
            nextUpgrade:2,


            ...options,
        }

        this.sprite = options.sprite
        this.sprite.selectable = true
        this.sprite.render.highlighable = true
        this.sprite.render.z = 2

        this.sprite.person = this
        this.sprite.element.setAttribute("draggaable", "true")

        this.level = this.options.level
        this.xp = this.options.xp
        this.nextUpgrade = this.options.nextUpgrade

        this.heldFood = undefined

        

        this.alive = true

        this.frozen = this.options.frozen

        this.foodItem = this.options.foodItem
        if (!this.foodItem) {
            this.hotbar = createSprite({
                imageSrc:"hotbar.png",
                tied:true,
                z:4,
            })

            this.heldFoodSprite = createSprite({
                imageSrc:"basil.png",
                tied:true,
                scale:0.4,
                visible:false,
                z:5,
            })

            

        

            this.healthText = createText({content:"4",z:5})
            this.attackText = createText({content:"8",z:5})
            
            
            this.stats = {...this.options.stats}
        }
        this.freezeBlock = createSprite({
            imageSrc:"empty.png",
            background:"iceCube.png",
            visible:true,
            tied:true,
            z:5,
        })

        this.ability = createSprite({
            imageSrc:"ability.png",
            visible:false,
            tied:true,
            z:10,
        })
        this.details = (this.foodItem)?getFoodDetals(this.sprite.name):getDetails(this.sprite.name)
        this.abilityText = createText({content:this.details.description(this.level),z:11,font:25,visible:false,tied:true,})
        this.nameText = createText({content:this.details.name,z:11,font:20,visible:false,tied:true,})


        persons.push(this)
    }
}

function deletePerson(person) {
    [person.healthText, person.attackText, person.hotbar, person.sprite, person.freezeBlock, person.heldFoodSprite].forEach(s => {
        if (s != undefined) {
            deleteSprite(s)
            s.element.remove()
            s.toDelete = true
        }
    });
    person.toDelete = true

    if (person.army != undefined) {
        for (let i = 0; i < person.army.length; i++) {
            const p = person.army[i];
            if (p.sprite.element.id == person.sprite.element.id) {
                person.army.splice(i, 1)
                break
            }
        }
    }

}

function setPersonHeldFood(person, name) {
    if (!person.foodItem) {
        person.heldFood = name
        person.heldFoodSprite.element.src = `imgs/${name.replace(" ", "_")}.png`
        person.heldFoodSprite.render.visible = true
    }
}

function givePersonXp(person, amount) {
    
    person.xp += amount;
      if (
        person.xp >= person.nextUpgrade
      ) {
        
        requestInteraction(person.sprite.name).onlevelup(
            person
          );
        person.level += 1;
        person.xp = 0;
        person.nextUpgrade = Math.ceil(
          person.nextUpgrade * 1.5
        );
        textForXpUpgrades(person.army)

      }

}

function textForXpUpgrades(army) {
    for (let i = 0; i < army.length; i++) {
        const f = army[i];
        givePersonXp(f, 0)
    }
}