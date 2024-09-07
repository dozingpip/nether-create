ServerEvents.recipes(event => {
// Spawn eggs
event.recipes.create.mixing("minecraft:shulker_spawn_egg", ["minecraft:turtle_egg", "minecraft:ender_chest", "#botania:petals/purple", "create:experience_nugget"]).heated();
event.recipes.create.mixing("minecraft:bee_spawn_egg", ["minecraft:turtle_egg", "minecraft:honeycomb", "minecraft:sugar", "create:experience_nugget"]).heated();
event.recipes.create.mixing("minecraft:witch_spawn_egg", ["minecraft:turtle_egg", "minecraft:brewing_stand", Fluid.of("create:potion", 1000).withNBT({Potion: "minecraft:awkward"}), "create:experience_nugget"]).heated();
event.recipes.create.mixing("minecraft:chicken_spawn_egg", ["minecraft:turtle_egg", "minecraft:egg", "create:experience_nugget"]).heated();
event.recipes.create.mixing("minecraft:piglin_spawn_egg", ["minecraft:turtle_egg", "minecraft:gold_block", "create:experience_nugget"]).heated();

// alternative recipes to Tinkers'
event.recipes.create.mixing(Fluid.of("minecraft:milk", 1000), ["minecraft:bone_block", "minecraft:turtle_egg", "minecraft:sugar", Fluid.of("funkyfluids:liquid_crystal", 144)]).heated();
event.recipes.create.mixing(Fluid.of("funkyfluids:liquid_crystal", 144), ["minecraft:quartz"]).heated();
event.recipes.create.mixing(Fluid.of("funkyfluids:liquid_crystal", 576), ["minecraft:quartz_block"]).heated();
// event.recipes.create.mixing(Fluid.of("tconstruct:blood", 50), ["minecraft:rotten_flesh"], [], 10).heated();
// event.recipes.create.mixing(Fluid.of("tconstruct:molten_ender", 250), ["minecraft:ender_pearl"]).heated();
event.recipes.create.mixing(Fluid.of("funkyfluids:silly_putty", 288), ["minecraft:slime_ball", Fluid.of("funkyfluids:magnetroleum", 144), Fluid.of("create:honey", 144), Item.of("#minecraft:fishes")]).superheated();
event.recipes.create.mixing(Fluid.of("funkyfluids:magnetroleum", 288), ["minecraft:lapis_lazuli", "botania:manasteel_ingot", "create:powdered_obsidian"]).superheated();

// Other
event.recipes.create.mixing(Item.of("create:rose_quartz", 2), ["minecraft:quartz", "minecraft:redstone", "create:experience_nugget"]);
event.recipes.create.mixing(Item.of("botania:redstone_root", 2), ["minecraft:redstone", "minecraft:oak_leaves"]);
event.recipes.create.mixing("minecraft:cake", [Item.of("minecraft:sugar", 2), Item.of("minecraft:wheat", 3), "minecraft:egg", Fluid.of("minecraft:milk", 1000)]).heated();
event.recipes.create.mixing("minecraft:poisonous_potato", [Item.of("minecraft:nether_wart", 4), Fluid.of("minecraft:milk", 1000),
Fluid.of("create:potion", 250).withNBT({Potion:"minecraft:poison"})]).heated();

// tea recipe, replace water with honey
event.remove({type:"create:mixing", output:Fluid.of("create:tea")});
event.recipes.create.mixing(Fluid.of("create:tea", 500), [Item.of("#botania:petals", 4), Fluid.of("create:honey", 250), Fluid.of("minecraft:milk", 250)]).heated();
event.recipes.create.mixing(Fluid.of("create:tea", 250), ["#minecraft:leaves", Fluid.of("create:honey", 250), Fluid.of("minecraft:milk", 250)]).heated();

// obsidian
event.recipes.create.mixing("minecraft:obsidian", ["minecraft:ice", Fluid.of("minecraft:lava", 1000)]).superheated();
});