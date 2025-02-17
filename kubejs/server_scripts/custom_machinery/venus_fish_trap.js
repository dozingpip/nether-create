//priority: 95
ServerEvents.recipes(event => {
    let nether_fish = ["netherdepthsupgrade:blazefish", "netherdepthsupgrade:bonefish",
        "netherdepthsupgrade:eyeball_fish", "netherdepthsupgrade:fortressgrouper",
        "netherdepthsupgrade:glowdine", "netherdepthsupgrade:lava_pufferfish",
        "netherdepthsupgrade:magmacubefish", "netherdepthsupgrade:obsidianfish",
        "netherdepthsupgrade:searing_cod", "netherdepthsupgrade:soul_sucker"]
    event.recipes.custommachinery.custom_machine("playingwithfire:venus_fish_trap", 100)
    .consumeDropOnStart("botania:mana_cookie", 1, 10)
    .consumeDropOnStart("minecraft:rotten_flesh", 1, 10)
    .runCommandOnStart("/create highlight ~ ~-1 ~ @p")
    .runCommandOnStart("/playsound minecraft:entity.fishing_bobber.throw block @p")
    .requireBlock("minecraft:lava", true, 0, -1, 0, 0, 0, 0, 1)
    .runCommandOnEnd("/playsound minecraft:entity.fishing_bobber.splash block @p")
    .requireFunctionOnEnd(ctx => {
        ctx.block.getUp().createEntity("minecraft:guardian")
        .mergeNbt({
            ActiveEffects: [
                {'forge:id':'minecraft:fire_resistance', Duration:-1, ShowParticles:1},
                {'forge:id':'minecraft:glowing', Duration:50, ShowParticles:1}
            ]
        })
        .spawn()
        ctx.block.getUp().createEntity(nether_fish[Math.floor(Math.random() * nether_fish.length)]).spawn()
        return ctx.success()})
    .jei()
    .requireItem("botania:mana_cookie")
    .requireItem("minecraft:rotten_flesh")
    .requireBlock("minecraft:lava", true, 0, -1, 0, 0, 0, 0, 1)
    .lootTableOutput("netherdepthsupgrade:gameplay/nether_fishing")
    .id("playingwithfire:venus_fish_trap")
})