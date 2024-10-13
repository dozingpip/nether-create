ServerEvents.recipes(event => {
    event.custom({
    "type": "lychee:lightning_channeling",
    "hide_in_viewer": true,
    "post": [
        {
            "type": "execute",
            "command": "fill ~-3 ~-3 ~-3 ~3 ~3 ~3 minecraft:budding_amethyst replace minecraft:calcite"
        }
    ]
    }).id("playingwithfire:lightning")
})