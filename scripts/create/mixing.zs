<recipetype:create:mixing>.addRecipe("poisonous_potato", "heated", <item:minecraft:poisonous_potato>, [<item:minecraft:nether_wart>*4], [<fluid:minecraft:milk>*1000,
<fluid:create:potion>.withTag({"Potion":"minecraft:poison"})*1000]);
<recipetype:create:mixing>.addRecipe("spider_egg", "heated", <item:minecraft:spider_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:spider_eye>], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("shulker_egg", "heated", <item:minecraft:shulker_spawn_egg>, [<item:minecraft:turtle_egg>, <tag:items:botania:petals/purple>], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("bee_egg", "heated", <item:minecraft:bee_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:honeycomb>, <item:minecraft:sugar>], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("witch_egg", "heated", <item:minecraft:witch_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:brewing_stand>, <item:minecraft:potion>.withTag({Potion: "minecraft:awkward" as string})], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("chicken_egg", "heated", <item:minecraft:chicken_spawn_egg>, [<item:minecraft:turtle_egg>, <item:minecraft:egg>], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("red_quartz", "none", <item:create:rose_quartz> *2, [<item:minecraft:quartz>, <item:minecraft:redstone>], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("redstone_root", "none", <item:botania:redstone_root> *2, [<item:minecraft:redstone>, <item:minecraft:oak_leaves>]);
<recipetype:create:mixing>.addRecipe("endoflame", "heated", <item:botania:endoflame>, [<item:botania:fertilizer>*2, <tag:items:botania:petals/red>, <tag:items:botania:petals/brown>*2, <tag:items:botania:petals/light_gray>], [<fluid:tconstruct:blood>*1000]);
<recipetype:create:mixing>.addRecipe("cake_overwrite", "heated", <item:minecraft:cake>, [<item:minecraft:sugar>*2, <item:minecraft:wheat>*3, <item:minecraft:egg>], [<fluid:minecraft:milk>*3000]);
