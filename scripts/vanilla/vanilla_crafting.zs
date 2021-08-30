import crafttweaker.api.CraftingTableManager;
craftingTable.addShapeless("seared_brick", <item:tconstruct:seared_brick>*4, [<item:tconstruct:seared_stone>]);
craftingTable.addShapeless("seared_stone", <item:tconstruct:seared_stone>, [<item:tconstruct:seared_brick>, <item:tconstruct:seared_brick>, <item:tconstruct:seared_brick>, <item:tconstruct:seared_brick>]);
craftingTable.addShaped("seared_melter", <item:tconstruct:seared_melter>, [[<item:tconstruct:seared_brick>,<item:minecraft:gold_block>, <item:tconstruct:seared_brick>], [<item:tconstruct:seared_brick>,<item:tconstruct:seared_brick>,<item:tconstruct:seared_brick>]]);

craftingTable.addShaped("acacia_drawer1x1", <item:storagedrawers:acacia_full_drawers_1>, [
    [<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>, <item:minecraft:crimson_planks>],
    [<item:minecraft:air>,<tag:items:forge:chests>,<item:minecraft:air>],
    [<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>]
]);

craftingTable.addShaped("acacia_drawer1x2", <item:storagedrawers:acacia_full_drawers_2>, [
    [<item:minecraft:crimson_planks>,<tag:items:forge:chests>, <item:minecraft:crimson_planks>],
    [<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>],
    [<item:minecraft:crimson_planks>,<tag:items:forge:chests>,<item:minecraft:crimson_planks>]
]);

craftingTable.addShaped("acacia_drawer1x4", <item:storagedrawers:acacia_full_drawers_4>, [
    [<tag:items:forge:chests>,<item:minecraft:crimson_planks>, <tag:items:forge:chests>],
    [<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>,<item:minecraft:crimson_planks>],
    [<tag:items:forge:chests>,<item:minecraft:crimson_planks>,<tag:items:forge:chests>]
]);

craftingTable.addShaped("dark_oak_drawer1x1", <item:storagedrawers:dark_oak_full_drawers_1>, [
    [<item:minecraft:warped_planks>,<item:minecraft:warped_planks>, <item:minecraft:warped_planks>],
    [<item:minecraft:air>,<tag:items:forge:chests>,<item:minecraft:air>],
    [<item:minecraft:warped_planks>,<item:minecraft:warped_planks>,<item:minecraft:warped_planks>]
]);

craftingTable.addShaped("dark_oak_drawer1x2", <item:storagedrawers:dark_oak_full_drawers_2>, [
    [<item:minecraft:warped_planks>,<tag:items:forge:chests>, <item:minecraft:warped_planks>],
    [<item:minecraft:warped_planks>,<item:minecraft:warped_planks>,<item:minecraft:warped_planks>],
    [<item:minecraft:warped_planks>,<tag:items:forge:chests>,<item:minecraft:warped_planks>]
]);

craftingTable.addShaped("dark_oak_drawer1x4", <item:storagedrawers:dark_oak_full_drawers_4>, [
    [<tag:items:forge:chests>,<item:minecraft:warped_planks>, <tag:items:forge:chests>],
    [<item:minecraft:warped_planks>,<item:minecraft:warped_planks>,<item:minecraft:warped_planks>],
    [<tag:items:forge:chests>,<item:minecraft:warped_planks>,<tag:items:forge:chests>]
]);


craftingTable.removeByName("quark:building/crafting/compressed/charcoal_block");
craftingTable.removeByName("quark:building/crafting/compressed/charcoal_block_uncompress");
craftingTable.addShapeless("charcoal_block", <item:quark:charcoal_block>, [<item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>]);
craftingTable.addShapeless("charcoal_block_uncompress", <item:minecraft:charcoal>*4, [<item:quark:charcoal_block>]);
craftingTable.addShapeless("sticks", <item:minecraft:stick>*16, [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>]);