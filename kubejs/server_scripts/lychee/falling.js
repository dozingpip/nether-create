ServerEvents.recipes(event => {
    let fallingWithBelow = (output, landing, below) =>
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
    let falling = (output, landing) =>
    {
        return {
            "type": "lychee:block_crushing",
            "landing_block": landing,
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
            ]
        }
    }
    // do ponderjs stuff with this since can't see the below thing without a tooltip
    // event.custom(falling("botania:pure_daisy", "candle", "moss_block"))
    // event.custom(falling("botania:pure_daisy", "turtle_egg", "moss_block"))
    // event.custom(falling("botania:pure_daisy", "cake", "moss_block"))
    // event.custom(fallingOn(falling("botania:pure_daisy", "flower_pot", "moss_block"), "pointed_dripstone"))
    event.custom(fallingWithBelow("create:zinc_block", "kubejs:potted_twisting_vines", "minecraft:magma_block"))
    event.custom(fallingWithBelow("minecraft:copper_block", "minecraft:potted_crimson_fungus", "minecraft:magma_block"))
    event.custom(
    {
        "type": "lychee:block_crushing",
        "item_in": [
        {
            "item": "gold_block"
        },
        ],
        "landing_block": "netherrack",
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
        "falling_block": "gravel",
        "landing_block": "botania:white_petal_block",
        "post": [
            {
                "type": "place",
                "block": "botania:pure_daisy"
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
        "landing_block": "create:shadow_steel_casing",
        "post": [
            {
                "type": "place",
                "block": "ender_chest"
            }
        ]
    })
})