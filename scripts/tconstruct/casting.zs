// Output copper from Create instead of Tinkers'
<recipetype:tconstruct:casting_table>.removeRecipe(<item:tconstruct:copper_ingot>);
<recipetype:tconstruct:casting_table>.removeRecipe(<item:tconstruct:copper_nugget>);
<recipetype:tconstruct:casting_basin>.removeRecipe(<item:tconstruct:copper_block>);
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("copper_ingot_gold_cast", <tag:items:tconstruct:casts/multi_use/ingot>, <fluid:tconstruct:molten_copper> * 144, <item:create:copper_ingot>, 50, false, false);
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("copper_ingot_sand_cast", <tag:items:tconstruct:casts/single_use/ingot>, <fluid:tconstruct:molten_copper> * 144, <item:create:copper_ingot>, 50, true, false);
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("copper_nugget_gold_cast", <tag:items:tconstruct:casts/multi_use/nugget>, <fluid:tconstruct:molten_copper> * 16, <item:create:copper_nugget>, 17, false, false);
<recipetype:tconstruct:casting_table>.addItemCastingRecipe("copper_nugget_sand_cast", <tag:items:tconstruct:casts/single_use/nugget>, <fluid:tconstruct:molten_copper> * 16, <item:create:copper_nugget>, 17, true, false);
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("copper_block_cast", <item:minecraft:air>, <fluid:tconstruct:molten_copper> * 1296, <item:create:copper_block>, 150, true, false);

// Ore Casting
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("cobalt_ore_cast", <item:minecraft:netherrack>, <fluid:tconstruct:molten_cobalt> * 1296, <item:tconstruct:cobalt_ore>, 200, true, false);
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("ancient_debris_cast", <item:botania:bellows>, <fluid:tconstruct:molten_clay> * 8000, <item:minecraft:ancient_debris>, 1500, true, false);
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("nether_gold_ore_cast", <item:minecraft:netherrack>, <fluid:tconstruct:molten_gold> * 1296, <item:minecraft:nether_gold_ore>, 100, true, false);

// Ender Chest
<recipetype:tconstruct:casting_basin>.removeRecipe(<item:minecraft:ender_chest>);
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("ender_chest_cast", <item:minecraft:ender_eye>, <fluid:tconstruct:molten_ender> * 1000, <item:minecraft:ender_chest>, 100, true, false);

// Other
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("pure_daisy_cast", <item:botania:white_double_flower>, <fluid:tconstruct:molten_zinc> * 1296, <item:botania:pure_daisy>, 200, true, false);
<recipetype:tconstruct:casting_basin>.addItemCastingRecipe("andesite_cast", <item:minecraft:gravel>, <fluid:tconstruct:seared_stone> * 1152, <item:minecraft:andesite>, 100, true, false);