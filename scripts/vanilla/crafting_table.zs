import crafttweaker.api.CraftingTableManager;

// Shaped

craftingTable.addShaped("gold_hopper", <item:minecraft:hopper>, [
    [<item:minecraft:gold_ingot>, <item:minecraft:air>, <item:minecraft:gold_ingot>],
    [<item:minecraft:gold_ingot>, <tag:items:forge:chests>, <item:minecraft:gold_ingot>],
    [<item:minecraft:air>, <item:minecraft:gold_ingot>, <item:minecraft:air>]
]);

craftingTable.addShaped("seared_melter", <item:tconstruct:seared_melter>, [[<item:tconstruct:seared_brick>,<item:minecraft:gold_block>, <item:tconstruct:seared_brick>], [<item:tconstruct:seared_brick>,<item:tconstruct:seared_brick>,<item:tconstruct:seared_brick>]]);

// Storage drawers with Nether woods
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

// Shapeless

// output is item:minecraft:
craftingTable.addShapeless("sticks", <item:minecraft:stick>*16, [<tag:items:minecraft:logs>, <tag:items:minecraft:logs>]);
craftingTable.addShapeless("dead_fire_coral_block", <item:minecraft:dead_fire_coral_block>, [<item:minecraft:dead_fire_coral>, <item:minecraft:dead_fire_coral>, <item:minecraft:dead_fire_coral>, <item:minecraft:dead_fire_coral>]);
craftingTable.addShapeless("fire_coral_block", <item:minecraft:fire_coral_block>, [<item:minecraft:fire_coral>, <item:minecraft:fire_coral>, <item:minecraft:fire_coral>, <item:minecraft:fire_coral>]);
craftingTable.addShapeless("wet_fire_coral", <item:minecraft:fire_coral_block>, [<item:minecraft:dead_fire_coral_block>, <item:minecraft:wet_sponge>]);
craftingTable.addShapeless("fire_coral_compress", <item:minecraft:fire_coral>*4, [<item:minecraft:fire_coral_block>]);
craftingTable.addShapeless("magma_cream_lava_bucket", <item:minecraft:lava_bucket>, [<item:minecraft:bucket>, <item:minecraft:magma_cream>]);
craftingTable.addShapeless("string_from_roots", <item:minecraft:string>, [
    <item:minecraft:warped_roots>, <item:minecraft:warped_roots>, <item:minecraft:warped_roots>,
    <item:minecraft:warped_roots>, <item:minecraft:warped_roots>, <item:minecraft:warped_roots>,
    <item:minecraft:warped_roots>, <item:minecraft:warped_roots>, <item:minecraft:warped_roots>]);
craftingTable.addShapeless("warped_fungus_from_roots", <item:minecraft:warped_fungus>, [
    <item:minecraft:warped_roots>, <item:minecraft:warped_roots>,
    <item:minecraft:warped_roots>, <item:minecraft:warped_roots>]);

// output is item:quark:
craftingTable.removeByName("quark:building/crafting/compressed/charcoal_block");
craftingTable.removeByName("quark:building/crafting/compressed/charcoal_block_uncompress");
craftingTable.addShapeless("charcoal_block", <item:quark:charcoal_block>, [<item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>]);
craftingTable.addShapeless("charcoal_block_uncompress", <item:minecraft:charcoal>*4, [<item:quark:charcoal_block>]);

// output is item:tconstruct
craftingTable.addShapeless("grout", <item:tconstruct:grout>, [<item:minecraft:quartz>, <item:minecraft:soul_sand>, <item:minecraft:gravel>]);
craftingTable.addShapeless("more_grout", <item:tconstruct:grout>*8, [
    <item:minecraft:quartz_block>, <item:minecraft:soul_sand>, <item:minecraft:soul_sand>, 
    <item:minecraft:soul_sand>, <item:minecraft:soul_sand>, <item:minecraft:gravel>,
    <item:minecraft:gravel>, <item:minecraft:gravel>, <item:minecraft:gravel>]);
craftingTable.addShapeless("seared_brick", <item:tconstruct:seared_brick>*4, [<item:tconstruct:seared_stone>]);
craftingTable.addShapeless("seared_stone", <item:tconstruct:seared_stone>, [<item:tconstruct:seared_brick>, <item:tconstruct:seared_brick>, <item:tconstruct:seared_brick>, <item:tconstruct:seared_brick>]);
craftingTable.addShapeless("necrotic_bone", <item:tconstruct:necrotic_bone>, [<item:minecraft:coal>, <item:minecraft:bone>]);

// output is item:create
craftingTable.addShapeless("sandpaper", <item:create:sand_paper>, [<item:tconstruct:pattern>, <item:minecraft:sand>]);