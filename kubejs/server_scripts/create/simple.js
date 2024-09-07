ServerEvents.recipes(event => {
    //filling
    event.recipes.create.filling(Item.of('minecraft:magma_block', 8), [
        'minecraft:netherrack',
        Fluid.of('minecraft:lava', 500)
    ])
    event.recipes.create.filling(Item.of('minecraft:netherrack', 32), [
        'minecraft:nether_wart_block',
        Fluid.of('minecraft:lava', 1000)
    ])
    event.recipes.create.filling(Item.of('minecraft:andesite', 8), [
        'minecraft:gravel',
        Fluid.of('minecraft:lava', 1000)
    ])
    event.recipes.create.filling(Item.of('botania:ender_air_bottle', 8), [
        'botania:phantom_ink',
        Fluid.of('funkyfluids:oobleck', 1000)
    ])
    event.recipes.create.filling(Item.of('minecraft:oak_sapling', 1), [
        'minecraft:red_mushroom',
        Fluid.of('funkyfluids:melonade', 250)
    ])
    event.recipes.create.filling(Item.of('minecraft:ancient_debris', 1), [
        'botania:bellows',
        Fluid.of('create:chocolate', 1000)
    ])

    event.recipes.create.emptying([
        'minecraft:netherrack',
        Fluid.of('minecraft:lava', 1500)
    ], 'minecraft:magma_cream')

    //crushing
    event.recipes.create.crushing('minecraft:red_mushroom', 'minecraft:crimson_fungus')
    event.recipes.create.crushing('minecraft:brown_mushroom', 'minecraft:warped_fungus')
    event.recipes.create.crushing('minecraft:warped_fungus', 'minecraft:warped_wart_block')
    event.recipes.create.crushing('create:powdered_obsidian', '#forge:obsidian')
    event.recipes.create.crushing(['minecraft:crimson_fungus', Item.of('minecraft:nether_wart', 1).withChance(0.25)], 'minecraft:nether_wart_block')
    event.recipes.create.compacting("minecraft:red_sand", [Item.of("create:cinder_flour",  4), Fluid.of("minecraft:lava", 1000)]);
    event.recipes.create.compacting("minecraft:lapis_block", ["minecraft:blue_glazed_terracotta", Fluid.of("create:honey", 250)]).heated();
    event.recipes.create.compacting("minecraft:nether_quartz_ore", "create:rose_quartz").heated();
    event.recipes.create.milling(["minecraft:cherry_sapling", '#minecraft:leaves'], "minecraft:spore_blossom");
    event.recipes.create.milling(["minecraft:quartz"], "minecraft:quartz_block");
    event.recipes.create.milling([Item.of("minecraft:dead_bush").withChance(0.25), Item.of('minecraft:gold_nugget', 3)], "minecraft:red_sand");
    // event.recipes.create.compacting("tconstruct:blood_slime_ball", [], [Fluid.of("tconstruct:blood", 250)], 1000).heated();
    // event.recipes.create.compacting("tconstruct:blood_slime", [], [Fluid.of("tconstruct:blood", 1250)], 1000).heated();
})