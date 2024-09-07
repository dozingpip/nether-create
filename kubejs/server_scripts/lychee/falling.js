ServerEvents.recipes(event => {
    let fallingOn = (json, fallingBlock) =>
    {
        json["fallingBlock"] = fallingBlock
        return json
    }
    let fallingDropItem = (output, json) =>
    {
        json["post"] = [
            {
                "type": "place",
                "block": "*"
            },
            {
                "type": "place",
                "offsetY": -1,
                "block": "*"
            },
            {
                "type": "drop_item",
                "item": output
            }
        ]
        return json
    }
    let falling = (output, landing, below) =>
    {
        return {
            "type": "lychee:block_crushing",
            "landing_block": landing,
            "contextual": {
                "type": "location",
                "offsetY": -1,
                "predicate": {
                    "block": {
                        "blocks": [ below ]
                    }
                }
            },
            "post": [
                {
                    "type": "place",
                    "block": "*"
                },
                {
                    "type": "place",
                    "offsetY": -1,
                    "block": output
                }
            ],
            "comment": "make sure your " + below + " is underneath"
        }
    }
    // do ponderjs stuff with this since can't see the below thing without a tooltip
    // event.custom(falling("botania:pure_daisy", "candle", "moss_block"))
    // event.custom(falling("botania:pure_daisy", "turtle_egg", "moss_block"))
    event.custom(fallingDropItem("botania:pure_daisy", fallingOn(falling("botania:pure_daisy", "minecraft:oxidized_cut_copper_slab","botania:white_buried_petals"), "gravel")))
    // event.custom(falling("botania:pure_daisy", "cake", "moss_block"))
    // event.custom(fallingOn(falling("botania:pure_daisy", "flower_pot", "moss_block"), "pointed_dripstone"))
    event.custom(falling("create:zinc_block", "kubejs:potted_twisting_vines", "minecraft:magma_block"))
    event.custom(falling("minecraft:copper_block", "minecraft:potted_crimson_fungus", "minecraft:magma_block"))
    event.custom(
    {
        "type": "lychee:block_crushing",
        "item_in": [
        {
            "item": "gold_block"
        },
        ],
        "contextual": {
            "type": "location",
            "offsetY": -1,
            "predicate": {
                "block": {
                    "blocks": [ "netherrack" ]
                }
            }
        },
        "post": [
            {
                "type": "place",
                "block": "nether_gold_ore"
            }
        ]
    })
    event.custom(
    {
        "type": "lychee:block_crushing",
        "item_in": [
        {
            "item": "ender_eye"
        },
        ],
        "contextual": {
            "type": "location",
            "offsetY": -1,
            "predicate": {
                "block": {
                    "blocks": [ "create:shadow_steel_casing" ]
                }
            }
        },
        "post": [
            {
                "type": "place",
                "block": "ender_chest"
            }
        ]
    })
})