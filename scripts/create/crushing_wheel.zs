<recipetype:create:crushing>.addRecipe("red_mushroom", [<item:minecraft:red_mushroom>], <item:minecraft:crimson_fungus>);
<recipetype:create:crushing>.addRecipe("brown_mushroom", [<item:minecraft:brown_mushroom>], <item:minecraft:warped_fungus>);
<recipetype:create:crushing>.removeRecipe(<item:create:powdered_obsidian>);
<recipetype:create:crushing>.addRecipe("powdered_obsidian", [<item:create:powdered_obsidian>], <tag:items:forge:obsidian>);
<recipetype:create:crushing>.addRecipe("warped_fungus", [<item:minecraft:warped_fungus>], <item:minecraft:warped_wart_block>);
<recipetype:create:crushing>.addRecipe("crimson_fungus", [<item:minecraft:crimson_fungus>, <item:minecraft:nether_wart> % 25], <item:minecraft:nether_wart_block>);
<recipetype:create:crushing>.removeByName("create:crushing/gravel");
<recipetype:create:crushing>.addRecipe("gravel_crush", [<item:minecraft:sand>, <item:minecraft:flint> % 40, <item:minecraft:clay_ball>% 15], <item:minecraft:gravel>);