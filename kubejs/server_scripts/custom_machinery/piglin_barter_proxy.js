ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("playingwithfire:barter_proxy", 0)
    .requireItem(Item.of("gold_ingot"))
    .lootTableOutput("minecraft:gameplay/piglin_bartering")
})