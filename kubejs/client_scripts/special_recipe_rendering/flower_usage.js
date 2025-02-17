// In client scripts

// Some reflection to prevent the entity from being recreated every frame

JEIAddedEvents.registerCategories(event => {
    let verifyRecipe = (r) => {
        return r.data != undefined && r.data.output != undefined;
    }

    let handleLookup = (builder, recipe) => {
        // Required because JEI doesn't seem to build a category if it has no slots
        builder.addSlot('render_only', 40, 55).addItemStack("botania:clayconia").setSlotName("clayconia");
        builder.addSlot('input', 62, 55).addItemStack(recipe.data.input).setSlotName("input");
        builder.addSlot('output', 120, 55).addItemStack(recipe.data.output).setSlotName("output");
    }

    let renderRecipe = (r, guiGraphics) => {
        AllGuiTextures.JEI_ARROW.render(guiGraphics, 80, 60);
    }
    event.custom('kubejs:clayconia_usage', category => {
        let { jeiHelpers } = category;
        let { guiHelper } = jeiHelpers;

        global.clayconiaRecipeType = category
        .title("Clayconia")
        .background(guiHelper.createBlankDrawable(150, 150))
        .icon(guiHelper.createDrawableItemStack('botania:clayconia'))
        .isRecipeHandled(r => verifyRecipe(r))
        .handleLookup((builder, r, focuses) => handleLookup(builder, r, focuses))
        .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => renderRecipe(r, guiGraphics))
        .recipeType;
    })
})

JEIAddedEvents.registerRecipes(event => {
    let registerRecipe = (input, drops) =>
    {
        event.custom('kubejs:clayconia_usage')
        .add({
            input: input,
            output: drops
        });
    }
    registerRecipe("minecraft:sand", "minecraft:clay")
})
// JEIAddedEvents.registerRecipeCatalysts(event => {
//     event.data.addRecipeCatalyst(Item.of('botania:clayconia'), global.clayconiaRecipeType)
// })