// In client scripts

JEIAddedEvents.registerCategories(event => {
    let verifyRecipe = (r) => {
        return r.data != undefined && r.data.output != undefined;
    }

    let handleLookup = (builder, recipe) => {
        // Required because JEI doesn't seem to build a category if it has no slots
        builder.addSlot('input', 30, 55).addItemStack(recipe.data.input).setSlotName("input");
        builder.addSlot('output', 95, 55).addItemStack(recipe.data.output).setSlotName("output");
    }

    let renderRecipe = (r, guiGraphics) => {
        AllGuiTextures.JEI_ARROW.render(guiGraphics, 50, 60);
    }
    event.custom('kubejs:eat_food', category => {
        let { jeiHelpers } = category;
        let { guiHelper } = jeiHelpers;

        global.foodEatenRecipeType = category
        .title("Eat Food")
        .background(guiHelper.createBlankDrawable(150, 150))
        .icon(guiHelper.createDrawableItemStack('minecraft:apple'))
        .isRecipeHandled(r => verifyRecipe(r))
        .handleLookup((builder, r, focuses) => handleLookup(builder, r, focuses))
        .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => renderRecipe(r, guiGraphics))
        .recipeType;
    })
})

JEIAddedEvents.registerRecipes(event => {
    let registerRecipe = (input, output) =>
    {
    
        event.custom('kubejs:eat_food')
        .add({
            input: input,
            output: output
        });
    }
    registerRecipe("netherdepthsupgrade:searing_cod", "minecraft:damaged_anvil")
})