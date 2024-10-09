// In client scripts

// Some reflection to prevent the entity from being recreated every frame


JEIAddedEvents.registerCategories(event => {
    let verifyEntityRecipe = (r) => {
        return r.data != undefined && r.data.description != undefined && r.data.output != undefined;
    }

    let handleEntityLookup = (builder, recipe) => {
        // Required because JEI doesn't seem to build a category if it has no slots
        builder.addSlot('input', 0, 15).addItemStack(recipe.data.input).setSlotName("input");
        builder.addSlot('render_only', 80, 15).addItemStack(recipe.data.grown).setSlotName("grown");
        builder.addSlot('output', 100, 110).addItemStack(recipe.data.output).setSlotName("output");
    }

    let renderEntityRecipe = (r, guiGraphics) => {
        AllGuiTextures.JEI_ARROW.render(guiGraphics, 30, 20);
        guiGraphics.drawWordWrap(Client.font, Text.translatable(r.data.description), 30, 15, 150, 0);
        guiGraphics.drawWordWrap(Client.font, Text.translatable("drops:"), 105, 100, 100, 0);
    }
    event.custom('kubejs:amethyst_growing', category => {
        let { jeiHelpers } = category;
        let { guiHelper } = jeiHelpers;

        global.entityRecipeType = category
        .title("Amethyst growing")
        .background(guiHelper.createBlankDrawable(150, 150))
        .icon(guiHelper.createDrawableItemStack('minecraft:amethyst_cluster'))
        .isRecipeHandled(r => verifyEntityRecipe(r))
        .handleLookup((builder, r, focuses) => handleEntityLookup(builder, r, focuses))
        .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => renderEntityRecipe(r, guiGraphics))
        .recipeType;
    })
})

JEIAddedEvents.registerRecipes(event => {
    let registerAmethystRecipe = (description, inputBlock, grown, drops) =>
    {
    
        event.custom('kubejs:amethyst_growing')
        .add({
            description: description,
            input: inputBlock,
            grown: grown,
            output: drops
        });
    }
    registerAmethystRecipe("grows:", "minecraft:budding_amethyst", "minecraft:amethyst_cluster", "minecraft:amethyst_shard")
})