// priority: 89

ServerEvents.recipes(event => {
    event.remove({output: 'minecraft:obsidian'})
    event.remove({id: 'botania:pure_daisy/obsidian'})
    event.remove({id: 'botania:pure_daisy/sand'})
    event.remove({id: 'botania:pure_daisy/cobblestone'})
    event.remove({id: 'funkyfluids:mixing/magnetroleum_mixing'})
    event.remove({id: 'funkyfluids:magnetroleum_bucket'})
    event.remove({type: 'create:fan_washing'})
    event.replaceInput({input: "minecraft:obsidian"}, "minecraft:obsidian", "#forge:obsidian")
    event.replaceInput({input: "minecraft:cobblestone"}, "minecraft:cobblestone", "#minecraft:stone_crafting_materials")
})