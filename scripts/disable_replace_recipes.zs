import crafttweaker.api.CraftingTableManager;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.recipe.Replacer;
import crafttweaker.api.FurnaceManager;

// remove
craftingTable.removeByName("minecraft:cake");
craftingTable.removeByName("minecraft:andesite");
craftingTable.removeByName("minecraft:magma_block");
craftingTable.removeByName("create:crafting/appliances/dough");
craftingTable.removeByName("botania:redstone_root");
furnace.removeByName("minecraft:sponge");
furnace.removeByName("create:andesite");
craftingTable.removeByRegex("quark:.*_rune.*");
craftingTable.removeByRegex("create:.*stone_.*");
craftingTable.removeByRegex("minecraft:mossy.*stone_.*");
craftingTable.removeByName("tconstruct:smeltery/scorched/nether_grout");
craftingTable.removeByName("tconstruct:smeltery/seared/grout");
craftingTable.removeByName("tconstruct:smeltery/seared/grout_multiple");
craftingTable.removeByRegex("tconstruct:common/mud.*");
craftingTable.removeByRegex("tconstruct:common/firewood/nah.*");
craftingTable.removeByRegex("tconstruct:common/fantastic_foundry.*");
<recipetype:tconstruct:part_builder>.removeAll();
<recipetype:tconstruct:casting_table>.removeByRegex("tconstruct:smeltery/casts/.*/(?!gems|plates|ingots|nuggets).*");
<recipetype:tconstruct:casting_table>.removeByRegex("tconstruct:tools/parts/casting/.*");
<recipetype:tconstruct:casting_basin>.removeByRegex("tconstruct:smeltery/casting/obsidian/.*");
<recipetype:tconstruct:casting_basin>.removeByRegex("tconstruct:smeltery/casting/scorched/.*");
<recipetype:tconstruct:melting>.removeByRegex("tconstruct:smeltery/melting/obsidian/.*");
<recipetype:tconstruct:casting_basin>.removeByName("tconstruct:smeltery/casting/quartz/andesite");
<recipetype:tconstruct:casting_basin>.removeByRegex("tconstruct:smeltery/casting/water/.*");
<recipetype:tconstruct:casting_basin>.removeByName("tconstruct:smeltery/casting/slime/magma_block");
<recipetype:tconstruct:casting_basin>.removeByName("tconstruct:smeltery/casting/slime/earth/block");
<recipetype:tconstruct:melting>.removeByName("tconstruct:smeltery/melting/diamond/enchanting_table");
<recipetype:create:compacting>.removeByName("create:compacting/andesite_from_flint");
<recipetype:botania:mana_infusion>.removeByName("botania:mana_infusion/granite_to_andesite");
<recipetype:botania:mana_infusion>.removeByName("botania:mana_infusion/stone_to_andesite");
<recipetype:botania:mana_infusion>.removeByName("botania:mana_infusion/cobble_to_sand");
<recipetype:create:crushing>.removeByName("create:crushing/gravel");
<recipetype:create:crushing>.removeByName("create:crushing/nether_wart_block");
<recipetype:create:crushing>.removeByRegex("create:crushing/.*_horse_armor");
<recipetype:create:mixing>.removeByName("create:mixing/lava_from_cobble");
<recipetype:create:filling>.removeByName("create:filling/gunpowder");
<recipetype:create:filling>.removeByName("create:filling/glowstone");
<recipetype:create:filling>.removeByName("create:filling/redstone");
<recipetype:create:splashing>.removeByRegex("create:splashing/.*");
<recipetype:create:milling>.removeByRegex("create:milling/.*fern");
<recipetype:create:milling>.removeByRegex("create:milling/.*grass");
<recipetype:create:milling>.removeByName("create:milling/sandstone");
<recipetype:create:milling>.removeByName("create:milling/clay");
craftingTable.removeByName("create:crafting/materials/rose_quartz");

// replacements
Replacer.forTypes(craftingTable).excluding(<resource:botania:terrasteel_chestplate>, <resource:botania:terrasteel_leggings>,
<resource:botania:terrasteel_helmet>,
<resource:botania:terrasteel_boots>,
<resource:botania:mana_ring>,
<resource:botania:mana_ring_greater>,
<resource:botania:twig_wand>,
<resource:botania:terra_pick>,
<resource:minecraft:cobblestone_stairs>, <resource:minecraft:stone_stairs>,
<resource:minecraft:cobblestone_slab>, <resource:minecraft:stone_slab>,
<resource:minecraft:stone_bricks>, <resource:minecraft:cobblestone_walls>, <resource:minecraft:mossy_cobblestone>)
.replace(<item:minecraft:obsidian>, <tag:items:forge:obsidian>)
.replace(<item:minecraft:stone>, <tag:items:forge:stone>)
.replace(<tag:items:forge:cobblestone>, <tag:items:minecraft:stone_crafting_materials>).execute();
Replacer.forTypes(furnace).replace(<tag:items:minecraft:logs_that_burn>, <tag:items:minecraft:logs>).execute();
Replacer.forOutput(<item:minecraft:writable_book>).replace(<item:minecraft:ink_sac>, <item:minecraft:black_dye>).execute();