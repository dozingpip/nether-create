// <recipetype:botania:mana_infusion>.addRecipe(name as string, output as IItemStack, input as IIngredient, mana as int, catalystState as @Optional BlockState)
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_spider_eye", <item:minecraft:spider_eye>, <item:botania:cosmetic_googly_eyes>, 200, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("mana_infusion_sugar", <item:minecraft:sugar>, <item:botania:mana_powder>, 200, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("bottled_darkness", <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:end" as string}), <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:nether" as string}), 400, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("bottled_sunlight", <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:overworld" as string}), <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:end" as string}), 400, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("bottled_ghosts", <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:nether" as string}), <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:overworld" as string}), 400, <blockstate:botania:alchemy_catalyst>);
<recipetype:botania:mana_infusion>.addRecipe("ender_air_bottle", <item:botania:ender_air_bottle>, <item:naturesaura:aura_bottle>.withTag({stored_type: "naturesaura:end" as string}), 400);