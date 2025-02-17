ServerEvents.recipes(event => {
    //filling
    event.recipes.create.filling(Item.of('minecraft:magma_block', 8), [
        'minecraft:netherrack',
        Fluid.of('minecraft:lava', 500)
    ]).id("playingwithfire:filling/magma");
    event.recipes.create.filling(Item.of('minecraft:netherrack', 32), [
        'minecraft:nether_wart_block',
        Fluid.of('minecraft:lava', 1000)
    ]).id("playingwithfire:filling/netherrack");
    event.recipes.create.filling(Item.of('botania:ender_air_bottle', 8), [
        'botania:phantom_ink',
        Fluid.of('funkyfluids:oobleck', 1000)
    ]).id("playingwithfire:filling/ender_air");
    event.recipes.create.filling(Item.of('minecraft:cherry_sapling', 1), [
        'minecraft:spore_blossom',
        Fluid.of('funkyfluids:melonade', 1000)
    ]).id("playingwithfire:filling/cherry_sapling");
    event.recipes.create.filling(Item.of('minecraft:ancient_debris', 1), [
        'minecraft:ochre_froglight',
        Fluid.of('create:chocolate', 1000)
    ]).id("playingwithfire:filling/ancient_debris");
    event.recipes.create.filling(Item.of('minecraft:redstone_block', 1), [
        'minecraft:netherrack',
        Fluid.of('funkyfluids:redstone_suspension', 1000)
    ]).id("playingwithfire:filling/redstone_block");

    event.recipes.create.emptying([
        'minecraft:netherrack',
        Fluid.of('minecraft:lava', 1500)
    ], 'minecraft:magma_cream').id("playingwithfire:emptying/lava")

    //crushing
    event.recipes.create.crushing(Item.of("minecraft:bone_meal", 3), "minecraft:shroomlight")
    event.recipes.create.crushing(['minecraft:gold_ingot', Item.of('minecraft:gold_ingot', 1).withChance(0.25)], 'minecraft:golden_sword').id("playingwithfire:crushing/golden_sword")
    event.recipes.create.crushing('minecraft:red_mushroom', 'minecraft:crimson_fungus').id("playingwithfire:crushing/red_mushroom")
    event.recipes.create.crushing('minecraft:brown_mushroom', 'minecraft:warped_fungus').id("playingwithfire:crushing/brown_mushroom")
    event.recipes.create.crushing(Item.of('minecraft:warped_fungus').withChance(0.25), 'minecraft:warped_wart_block').id("playingwithfire:crushing/warped_fungus")
    event.recipes.create.crushing('create:powdered_obsidian', '#forge:obsidian').id("playingwithfire:crushing/powdered_obsidian")
    event.remove({id: 'create:crushing/nether_wart_block'})
    event.recipes.create.crushing([Item.of('minecraft:crimson_fungus').withChance(0.5), Item.of('minecraft:nether_wart', 1).withChance(0.25)], 'minecraft:nether_wart_block').id("playingwithfire:crushing/wart_block_crush")
    event.recipes.create.compacting("minecraft:red_sand", [Item.of("create:cinder_flour",  4), Fluid.of("minecraft:lava", 1000)]).id("playingwithfire:compacting/red_sand");
    event.recipes.create.compacting(Item.of("minecraft:lapis_lazuli", 18), ["minecraft:blue_glazed_terracotta", Fluid.of("create:honey", 500)]).heated().id("playingwithfire:compacting/lapis");
    event.recipes.create.compacting("minecraft:sculk_catalyst", ["minecraft:sculk", "minecraft:end_stone"]).heated().id("playingwithfire:compacting/sculk_catalyst");
    event.recipes.create.compacting("minecraft:nether_quartz_ore", "create:rose_quartz").heated().id("playingwithfire:compacting/nether_quartz_ore");
    event.recipes.create.compacting("minecraft:moss_block", ["botania:vine_ball", "minecraft:grass_block"]).id("playingwithfire:compacting/moss_block");
    event.recipes.create.compacting("minecraft:music_disc_13", ["create:turntable", "minecraft:black_carpet", Item.of("minecraft:gold_ingot", 13)]).heated().id("playingwithfire:compacting/disc_13");
    event.recipes.create.milling(["minecraft:quartz"], "minecraft:quartz_block").id("playingwithfire:milling/quartz");
    event.remove({id: 'create:milling/wheat'})
    event.recipes.create.milling([Item.of("minecraft:wheat_seeds").withChance(0.4), "create:wheat_flour", Item.of("create:wheat_flour").withChance("0.5")], "minecraft:wheat").id("playingwithfire:milling/wheat");
    event.recipes.create.milling(["minecraft:andesite"], "minecraft:polished_andesite").id("playingwithfire:milling/unpolish_andesite");
    event.recipes.create.milling(["create:cinder_flour"], "minecraft:netherrack").id("playingwithfire:milling/cinder_flour");
    event.recipes.create.milling([Item.of("minecraft:dead_bush").withChance(0.25), Item.of('minecraft:gold_nugget', 3)], "minecraft:red_sand").id("playingwithfire:milling/dead_bush");
})