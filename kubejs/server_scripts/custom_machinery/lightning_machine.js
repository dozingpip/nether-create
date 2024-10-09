ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("playingwithfire:teatable", 100)
    .requireBlock("minecraft:lightning_rod", true, -1, -1, -1, 1, 1, 1, 1)
    .destroyBlockOnStart("botania:teru_teru_bozu", true, -1, -1, -1, 1, 1, 1, 1)
    .runCommandOnEnd("/summon minecraft:lightning_bolt ~ ~ ~")
    .id("playingwithfire:teatable/summon_lightning")
})