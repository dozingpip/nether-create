ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("playingwithfire:lightningmachine", 100)
    .requireBlock("minecraft:lightning_rod", true, -1, -1, -1, 1, 1, 1, 1)
    .destroyBlockOnStart("botania:teru_teru_bozu", true, -1, -1, -1, 1, 1, 1, 1)
    .runCommandOnEnd("/summon minecraft:lightning_bolt ~ ~ ~")
    .runCommandEachTick("/particle minecraft:glow ~ ~ ~ 1 1 1 10 1")
    .jei()
    .id("playingwithfire:lightning_machine/summon_lightning")
})