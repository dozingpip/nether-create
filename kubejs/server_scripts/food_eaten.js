ItemEvents.foodEaten("netherdepthsupgrade:searing_cod", event => {
    var block = event.level.getBlock(event.player.blockPosition().x, event.player.blockPosition().y +4, event.player.blockPosition().z)
    block.set("minecraft:damaged_anvil")
})