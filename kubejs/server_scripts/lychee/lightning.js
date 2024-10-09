ServerEvents.recipes(event => {
    event.custom({
    "type": "lychee:lightning_channeling",
    "item_in": {"item":"minecraft:calcite"},
    "post": [
        {
            "type": "place",
            "block": "minecraft:budding_amethyst"
        }
    ]
    }).id("playingwithfire:lightning")
})