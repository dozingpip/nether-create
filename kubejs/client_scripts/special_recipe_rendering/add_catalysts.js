//priority: 99
JEIAddedEvents.registerRecipeCatalysts(event => {
    event.data.addRecipeCatalyst('minecraft:lightning_rod', global.lightningRecipeType)
    event.data.addRecipeCatalyst("minecraft:flint_and_steel", global.fireEntityRecipeType)
    event.data.addRecipeCatalyst('create:fluid_tank', global.fluidEntityRecipeType)
    event.data.addRecipeCatalyst('botania:clayconia', global.clayconiaRecipeType)
    event.data.addRecipeCatalyst('minecraft:gold_ingot', global.barteringRecipeType)
})