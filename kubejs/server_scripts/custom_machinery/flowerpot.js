//priority: 3
ServerEvents.recipes(event => {
    let flower = (destroyBlocks, blockAmounts, itemInputs, output) =>
    {
        let colors = ["lime", "green", "yellow","red", "cyan","light_gray","gray","white", "brown","magenta","purple","pink", "blue","black","light_blue", "orange"];
        let recipe = event.recipes.custommachinery.custom_machine("playingwithfire:teatable", 100)
        destroyBlocks.forEach(function (block, i)
        {
            recipe.destroyBlockOnEnd([block in colors ? "botania:" + block + "_mushroom" : block], true, -1, -1, -1, 1, 1, 1, blockAmounts[i])
        })
        itemInputs.forEach(function(item)
        {
            recipe.consumeDropOnStart(item, 1, 1)
        })
        recipe.requireFluidPerTick(Fluid.of('create:tea', 10))
        .placeBlockOnEnd(output, 0, 1, 0, 0, 1, 0)
        .runCommandEachTick("/particle botania:wisp 0.35 0 .25 0 0.75 true false ~ ~1 ~ 0 0 0 1 5")
        .runCommandOnEnd("/particle botania:wisp 0.5 0 .5 0 1.5 true false ~ ~1 ~ 0 0 0 1 100")
        .jei()
        let circleIndex = 0;
        itemInputs.forEach(function(item)
        {
            recipe.requireItem(item, "circle"+circleIndex)
            circleIndex += 1
        })
        destroyBlocks.forEach(function(block, i)
        {
            recipe.requireItem(Item.of(block, blockAmounts[i]), "circle"+circleIndex)
            circleIndex += 1
        })
        recipe.requireFluidPerTick(Fluid.of('create:tea', 10))
        .requireItem(Item.of("kubejs:teatable"), "table_slot_input")
        .produceItem(Item.of(output), "above_table_slot_output")
        .requireItem(Item.of("kubejs:teatable"), "table_slot_output")
        .id("playingwithfire:teatable/"+(output.substring(output.lastIndexOf(":")+1)))
    }
    let flowerpot = (destroyBlocks, itemInputs, output) =>
    {
        let potted_plants = {
            "minecraft:flower_pot" : "minecraft:flower_pot",
            "minecraft:bamboo" : "minecraft:potted_bamboo",
            "minecraft:cactus" : "minecraft:potted_cactus",
            "minecraft:sugar_cane" : "kubejs:potted_sugar_cane",
            "minecraft:twisting_vines" : "kubejs:potted_twisting_vines",
            "minecraft:wither_rose" : "minecraft:potted_wither_rose"}
        let protect = ['minecraft:wither_skeleton_skull']
        let recipe = event.recipes.custommachinery.custom_machine("playingwithfire:teatable", 100)
        let pot_type = 'minecraft:flower_pot'
        destroyBlocks.forEach(function(block)
        {
            if(block in potted_plants)
            {
                pot_type = potted_plants[block]
            }
            else if(block in protect)
                recipe.requireBlock([block], true, -1, -1, -1, 1, 1, 1)
            else
                recipe.destroyBlockOnEnd([block], true, -1, -1, -1, 1, 1, 1)
        })
        recipe.requireBlock([pot_type], true, -1, -1, -1, 1, 1, 1, 1)
        
        itemInputs.forEach(function(item)
        {
            recipe.consumeDropOnStart(item, item.count, 2)
        })
        recipe.destroyAndPlaceBlockOnEnd(potted_plants[output], 0, 1, 0, 0, 1, 0, 1, [pot_type], true)
        .runCommandEachTick("/particle botania:wisp 0.25 0 .25 0 0.75 true false ~ ~1 ~ 0 0 0 1 5")
        .runCommandOnEnd("/particle minecraft:composter ~ ~1 ~ .25 .25 .25 0.125 10")
        .jei()
        
        let circleIndex = 0;
        itemInputs.forEach(function(item)
        {
            recipe.requireItem(item, "circle"+circleIndex)
            circleIndex += 1
        })
        destroyBlocks.forEach(function(block)
        {
            recipe.requireItem(Item.of(block), block in potted_plants ? "flower_pot_contents_input" : "circle" + circleIndex)
            if(!(block in potted_plants))
                circleIndex += 1
        })
        recipe.requireItem(Item.of("kubejs:teatable"), "table_slot_input")
        .requireItem('minecraft:flower_pot', "flower_pot_slot")
        .requireItem('minecraft:flower_pot', "flower_pot_slot2")
        .produceItem(Item.of(output), "above_table_slot_output")
        .requireItem(Item.of("kubejs:teatable"), "table_slot_output")
        .id("playingwithfire:teatable/"+(output.substring(output.lastIndexOf(":")+1)))
    }
    flower(["minecraft:nether_quartz_ore", "minecraft:nether_gold_ore", "minecraft:ancient_debris", "minecraft:red_sand"],
        [1,1,1,1], [Item.of("botania:rune_pride"), Item.of("botania:rune_greed"), Item.of("botania:redstone_root"), Item.of("botania:pixie_dust")],
        "botania:orechid_ignem");
    flowerpot(["botania:black_mystical_flower"], [Item.of("botania:black_lotus")], "minecraft:wither_rose");
    flowerpot(["minecraft:twisting_vines"], [Item.of("botania:black_lotus")], "minecraft:bamboo");
    flowerpot(["minecraft:twisting_vines"], [Item.of("minecraft:sugar", 3)], "minecraft:sugar_cane");
    flowerpot(["minecraft:dried_kelp_block"], [], "minecraft:cactus");
    //botania flowers
    let skip = ["botania:orechid_ignem", "botania:orechid", "minecraft:player_head", "botania:pure_daisy"]
    console.log("start hi")
    event.forEachRecipe({type: "botania:petal_apothecary"}, recipe => {
        let json = recipe.json;
        let ingredients = json.get("ingredients")
        let output = json.get("output").get("item").toString().replace('"', "")
        if (!skip.includes(output))
        {
            let flower_recipe = event.recipes.custommachinery.custom_machine("playingwithfire:teatable", 100)
            var petals = []
            var other_ingredients = []
            if(output != "botania:endoflame")
            {
                flower_recipe.requireFluidPerTick(Fluid.of("create:tea", 10));
            }
            ingredients.forEach(function(ingredient)
            {
                if (ingredient.has("tag") && ingredient.get("tag").toString().contains("petals"))
                {
                    let petal_tag = ingredient.get("tag").toString().replace('"', "")
                    if (petal_tag in petals)
                        petals[petal_tag].amount += 1
                    else
                    {
                        let color = petal_tag.substring(15);
                        petals.push({"tag": "#" + petal_tag, "buried": "botania:" + color + "_buried_petals", "mushroom": "botania:"+color+"_mushroom", "amount": 1})
                    }
                }
                else
                {
                    let itemObject
                    if (ingredient.has("tag"))
                        itemObject = Item.of("#" + ingredient.get("tag").toString().replace('"', ""))
                    else
                        itemObject = Item.of(ingredient.get("item").toString().replace('"', ""))
                    flower_recipe.consumeDropOnStart(itemObject, 1, 2)
                    other_ingredients.push(itemObject)
                }
            })
            petals.forEach(function(petal)
            {
                flower_recipe.destroyBlockOnEnd([petal["buried"], petal["mushroom"]], true, -1, -1, -1, 1, 1, 1, petal["amount"])
            })
            flower_recipe.placeBlockOnEnd(Item.of(output).id, 0, 1, 0, 0, 1, 0)
            flower_recipe.runCommandEachTick("/particle botania:wisp 0.35 0 .25 0 0.75 true false ~ ~1 ~ 0 0 0 1 5")
            .runCommandOnEnd("/particle botania:wisp 0.5 0 .5 0 1.5 true false ~ ~1 ~ 0 0 0 1 100")
            .jei()
            let circleIndex = 0;
            petals.forEach(function(petal, i)
            {
                flower_recipe.requireItemTag(petal["tag"], petal["amount"], "circle"+i)
                circleIndex++;
            })
            other_ingredients.forEach(function(ing)
            {
                flower_recipe.requireItem(ing, "circle" +circleIndex)
                circleIndex++;
            })
            console.log(circleIndex + " ingredients");
            if(output != "botania:endoflame")
            {
                flower_recipe.requireFluidPerTick(Fluid.of("create:tea", 10));
            }
            flower_recipe.produceItem(Item.of(output), "above_table_slot_output")
            .requireItem(Item.of("kubejs:teatable"), "table_slot_input")
            .requireItem(Item.of("kubejs:teatable"), "table_slot_output")
            .id("playingwithfire:teatable/"+(output.substring(output.lastIndexOf(":")+1)))
        }
    })
    event.remove({type: 'botania:petal_apothecary'})

    let tadpole_recipe = event.recipes.custommachinery.custom_machine("playingwithfire:teatable", 100)
    .requireFluidPerTick(Fluid.of("create:potion", 10).withNBT({Potion: "minecraft:awkward"}))
    .consumeDropOnStart("minecraft:ghast_tear", 1, 2)
    .runCommandOnEnd("/summon minecraft:tadpole")
    .jei()
    .produceItem("minecraft:tadpole_bucket")
    .requireFluidPerTick(Fluid.of("create:potion", 10).withNBT({Potion: "minecraft:awkward"}))
    .requireItem("minecraft:ghast_tear")
    .requireItem(Item.of("kubejs:teatable"), "table_slot_input")
    .requireItem(Item.of("kubejs:teatable"), "table_slot_output")
    .id("playingwithfire:teatable/tadpole")
})