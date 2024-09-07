// priority: 89

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:obsidian'})
    event.remove({id: 'botania:pure_daisy/obsidian'})
    event.remove({type: 'create:fan_washing'})
})