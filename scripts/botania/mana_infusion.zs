// <recipetype:botania:mana_infusion>.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalystState as @Optional BlockState)
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_spider_eye", <item:minecraft:spider_eye>, <item:botania:cosmetic_googly_eyes>, 200, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_sugar", <item:minecraft:sugar>, <item:botania:mana_powder>, 200, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_yellow_blossom_sapling", <item:quark:yellow_blossom_sapling>, <item:quark:red_blossom_sapling>, 100, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_pink_blossom_sapling", <item:quark:pink_blossom_sapling>, <item:quark:yellow_blossom_sapling>, 100, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_orange_blossom_sapling", <item:quark:orange_blossom_sapling>, <item:quark:pink_blossom_sapling>, 100, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_lavendar_blossom_sapling", <item:quark:lavender_blossom_sapling>, <item:quark:orange_blossom_sapling>, 100, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_blue_blossom_sapling", <item:quark:blue_blossom_sapling>, <item:quark:lavender_blossom_sapling>, 100, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_red_blossom_sapling", <item:quark:red_blossom_sapling>, <item:quark:blue_blossom_sapling>, 100, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("wet_sponge", <item:minecraft:wet_sponge>, <item:minecraft:sponge>, 10000);
<recipetype:botania:mana_infusion>.removeRecipe(<item:minecraft:ice>);