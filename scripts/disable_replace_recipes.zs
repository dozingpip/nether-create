import crafttweaker.api.CraftingTableManager;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.FurnaceManager;

// remove
craftingTable.removeByName("minecraft:cake");
craftingTable.removeByRegex("quark:.*_rune.*");
<recipetype:tconstruct:melting>.removeByRegex("tconstruct:smeltery/melting/obsidian/.*");
<recipetype:tconstruct:melting>.removeByRegex("tconstruct:smeltery/melting/diamond/enchanting_table");

// replacements
Replacer.forTypes(craftingTable).excluding(<resource:botania:terrasteel_chestplate>, <resource:botania:terrasteel_leggings>,
<resource:botania:terrasteel_helmet>,
<resource:botania:terrasteel_boots>,
<resource:botania:mana_ring>,
<resource:botania:mana_ring_greater>,
<resource:botania:twig_wand>,
<resource:botania:terra_pick>).replace(<item:minecraft:obsidian>, <tag:items:forge:obsidian>).replace(<item:minecraft:stone>, <tag:items:forge:stone>).execute();
Replacer.forTypes(furnace).replace(<tag:items:minecraft:logs_that_burn>, <tag:items:minecraft:logs>).execute();