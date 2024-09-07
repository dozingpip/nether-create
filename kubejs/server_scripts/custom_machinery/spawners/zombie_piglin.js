ServerEvents.recipes(event => {
    event.recipes.custommachinery.custom_machine("playingwithfire:zombie_piglin_spawner", 200)
    .requireBlock("minecraft:warped_hyphae", true, -1, -1, -1, 1, 1, 1, 1)
    .runCommandOnEnd("/summon minecraft:zombified_piglin ~ ~1 ~")
    .chance(0.5)
})