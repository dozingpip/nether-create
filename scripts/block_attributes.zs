import crafttweaker.api.blocks.MCBlockState;
import crafttweaker.api.tag.MCTag;
import crafttweaker.api.blocks.MCBlock;
import crafttweaker.api.loot.modifiers.CommonLootModifiers;
// blast resistance
<block:create:shadow_steel_casing>.blastResistance = 1200;
<block:botania:elementium_block>.blastResistance = 1200;

//tags
<tag:blocks:forge:stone>.add(<block:minecraft:blackstone>);
<tag:blocks:forge:dirt>.add([<block:minecraft:crimson_nylium>, <block:minecraft:warped_nylium>, <block:custommachinery:custom_machine_block>]);
<tag:blocks:botania:livingwood>.add([<block:botania:livingwood_planks>, <block:botania:mossy_livingwood_planks>, <block:botania:livingwood_planks>,
<block:botania:framed_livingwood>, <block:botania:pattern_framed_livingwood>, <block:botania:glimmering_livingwood>]);
// function harvestToolPickaxe(tags as MCTag<MCBlock>[]) as void
// {
//     for tag in tags
//     {
//         for block in tag.getElements()
//         {
//             block.harvestTool = <tooltype:pickaxe>;
//         }
//     }
// }
// harvestToolPickaxe([
//     <tag:blocks:minecraft:logs>, <tag:blocks:minecraft:planks>, <tag:blocks:minecraft:signs>,
//     <tag:blocks:minecraft:trapdoors>, <tag:blocks:minecraft:doors>, <tag:blocks:forge:chests>,
//     <tag:blocks:quark:ladders>, <tag:blocks:minecraft:fences>, <tag:blocks:minecraft:fence_gates>,
//     <tag:blocks:minecraft:wooden_pressure_plates>, <tag:blocks:minecraft:slabs>,
//     <tag:blocks:minecraft:stairs>, <tag:blocks:forge:bookshelves>, <tag:blocks:botania:livingwood>,
//     <tag:blocks:minecraft:buttons>]);

// <block:create:fluid_tank>.harvestTool = null;
// <block:create:fluid_tank>.harvestLevel = 0;
// <block:tconstruct:seared_fuel_tank>.harvestTool = <tooltype:axe>;
// <block:tconstruct:seared_fuel_tank>.harvestLevel = 0;
<block:minecraft:turtle_egg>.addToolDrop("turtle", <item:minecraft:air>, <item:minecraft:turtle_egg>);
<block:minecraft:weeping_vines>.addToolDrop("wvines", <item:minecraft:air>, <item:minecraft:weeping_vines>);
<block:minecraft:twisting_vines>.addToolDrop("tvines", <item:minecraft:air>, <item:minecraft:twisting_vines>);
// for block in <tag:blocks:botania:double_mystical_flowers>.getElements()
// {
//     block.addLootModifier(block.registryName.path + "remove", CommonLootModifiers.clearLoot());
//     block.validStates[0].addTargetedLootModifier(block.registryName.path + "remove2", CommonLootModifiers.clearLoot());
//     block.defaultState.addTargetedLootModifier(block.registryName.path + "add", CommonLootModifiers.chaining(CommonLootModifiers.clearLoot(), CommonLootModifiers.add(block.asItem())));
// }
// <blockstate:botania:white_double_flower>.addTargetedLootModifier("white_flower", CommonLootModifiers.clearLoot());
// <blockstate:botania:white_double_flower:half=lower>.addTargetedLootModifier("white_flower_lower", CommonLootModifiers.clearing(CommonLootModifiers.add(<item:minecraft:stick>)));
