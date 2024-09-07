ItemEvents.rightClicked(event => {
    if (event.player.mainHandItem == 'minecraft:spyglass') {
        let ray = event.player.rayTrace(64)
        let block = String(ray.block.id)
        if (JsonIO.read('kubejs/ponder.json').get("ponder").includes(block)) {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder ${block}`)
        } else {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder`)
        }
    }
})