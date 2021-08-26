// Spawn eggs
<recipetype:create:mixing>.addRecipe("spider_egg", "heated", <item:minecraft:spider_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:spider_eye>], [<fluid:tconstruct:blood>*500]);
<recipetype:create:mixing>.addRecipe("shulker_egg", "heated", <item:minecraft:shulker_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:ender_chest>, <tag:items:botania:petals/purple>], [<fluid:tconstruct:blood>*500]);
<recipetype:create:mixing>.addRecipe("bee_egg", "heated", <item:minecraft:bee_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:honeycomb>, <item:minecraft:sugar>], [<fluid:tconstruct:blood>*500]);
<recipetype:create:mixing>.addRecipe("witch_egg", "heated", <item:minecraft:witch_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:brewing_stand>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward" as string})], [<fluid:tconstruct:blood>*500]);
<recipetype:create:mixing>.addRecipe("chicken_egg", "heated", <item:minecraft:chicken_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:egg>], [<fluid:tconstruct:blood>*500]);
<recipetype:create:mixing>.addRecipe("piglin_egg", "heated", <item:minecraft:piglin_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:gold_block>, <item:minecraft:leather>], [<fluid:tconstruct:blood>*500]);

// alternative recipes to Tinkers'
<recipetype:create:mixing>.addRecipe("milk", "heated", <fluid:minecraft:milk>*1000, [<item:minecraft:bone_block>, <item:minecraft:turtle_egg>, <item:minecraft:sugar>], [<fluid:tconstruct:molten_quartz>*144]);
<recipetype:create:mixing>.addRecipe("molten_quartz", "heated", <fluid:tconstruct:molten_quartz>*144, [<item:minecraft:quartz>]);
<recipetype:create:mixing>.addRecipe("molten_quartz_from_block", "heated", <fluid:tconstruct:molten_quartz>*576, [<item:minecraft:quartz_block>]);
<recipetype:create:mixing>.addRecipe("blood", "heated", <fluid:tconstruct:blood>*50, [<item:minecraft:rotten_flesh>]);
<recipetype:create:mixing>.addRecipe("molten_ender", "heated", <fluid:tconstruct:molten_ender>*250, [<item:minecraft:ender_pearl>]);
<recipetype:create:mixing>.addRecipe("queens_slime", "superheated", <fluid:tconstruct:molten_queens_slime>*288, [<item:minecraft:slime_ball>],[<fluid:tconstruct:molten_cobalt>*144, <fluid:tconstruct:molten_gold>*144, <fluid:tconstruct:magma>*250]);
<recipetype:create:mixing>.addRecipe("molten_cobalt", "superheated", <fluid:tconstruct:molten_cobalt>*288, [<item:minecraft:lapis_lazuli>, <item:botania:manasteel_ingot>, <item:create:powdered_obsidian>]);

// Other
<recipetype:create:mixing>.addRecipe("red_quartz", "none", <item:create:rose_quartz> *2, [<item:minecraft:quartz>, <item:minecraft:redstone>], [<fluid:tconstruct:blood>*500]);
<recipetype:create:mixing>.addRecipe("redstone_root", "none", <item:botania:redstone_root> *2, [<item:minecraft:redstone>, <item:minecraft:oak_leaves>]);
<recipetype:create:mixing>.addRecipe("cake_overwrite", "heated", <item:minecraft:cake>, [<item:minecraft:sugar>*2, <item:minecraft:wheat>*3, <item:minecraft:egg>], [<fluid:minecraft:milk>*3000]);
<recipetype:create:mixing>.addRecipe("poisonous_potato", "heated", <item:minecraft:poisonous_potato>, [<item:minecraft:nether_wart>*4], [<fluid:minecraft:milk>*1000,
<fluid:create:potion>.withTag({"Potion":"minecraft:poison"})*250]);
