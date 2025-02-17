// priority: 90

console.info('Hello, World! (You will see this line every time client resources reload)')
JEIEvents.hideItems(event => {
    // Hide items in JEI here
    event.hide('minecraft:tipped_arrow')
    event.hide('kubejs:incomplete_ice')
})

// JEIEvents.removeCategories(event => {
    // console.log(event.getCategoryIds())

    // const removeCategories = [
    // 'create:automatic_shapeless',
    // 'create:automatic_shaped',
    // 'create:automatic_packaging',
    // 'create:automatic_packing',
    // 'create:fan_smoking',
    // 'create:fan_blasting',
    // 'minecraft:blasting',
    // 'minecraft:smoking',
    // 'minecraft:anvil',
    // 'minecraft:smithing_table',
    // 'minecraft:fuel',
    // 'minecraft:smithing_table',
    // 'minecraft:campfire',
    // 'minecraft:stonecutting'
    // ]

    // removeCategories.forEach((catid) => {
    //     // console.log('Removing category id for: ' + catid)
    //     event.remove(catid)
    // })
    
    // event.remove('minecraft:plugins/tag')
// })

// JEIEvents.removeRecipes(event => {
//     console.log(event.getCategoryIds())
//     event.forEachRecipe({type: "create:spout_filling"}, recipe => {console.log(recipe.id)})
//     event.remove("create:spout_filling", ['create:fill_minecraft_bucket_with_minecraft_milk'])
// })