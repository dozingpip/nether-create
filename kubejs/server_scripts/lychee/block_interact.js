ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_interacting",
        "block_in": "minecraft:gold_block",
        "item_in": {"item":"minecraft:rotten_flesh"},
        "post":
        [
            {
                "type": "place",
                "block": "*"
            },
            {
                "type":"execute",
                "command": "summon minecraft:piglin ~ ~ ~",
                "hide": false
            }
        ]
    }).id("playingwithfire:block_interact/piglin");
    event.custom({
        "type": "lychee:block_interacting",
        "block_in": "minecraft:dead_fire_coral",
        "item_in": {"item":"minecraft:rotten_flesh"},
        "post":
        [
            {
                "type": "place",
                "block": "*"
            },
            {
                "type":"execute",
                "command": "place feature playingwithfire:coral_tree ~ ~ ~",
                "hide": false
            }
        ]
    }).id("playingwithfire:block_interact/coral_tree");
});