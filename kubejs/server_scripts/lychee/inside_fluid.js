ServerEvents.recipes(event => {
    event.custom({
        type: "lychee:item_inside",
        item_in: {
            item: "minecraft:sugar_cane"
        },
        block_in: {
            blocks: ["create:honey"],
            state: {
                "level": 0
            }
        },
        post: [
            {
                type: "drop_item",
                item: "minecraft:sugar_cane",
                count: 9
            },
            {
                type:"place",
                block: "*"
            }
        ]
    }).id("playingwithfire:fluid_dip/more_sugar_cane");
    event.custom({
        type: "lychee:item_inside",
        hide_in_viewer: true,
        item_in: {
            item: "botania:cyan_shiny_flower"
        },
        block_in: {
            blocks: ["create:honey"],
            state: {
                "level": 0
            }
        },
        post: [
            {
                "type":"execute",
                "command": "summon minecraft:glow_squid ~ ~ ~",
                "hide": false
            }
        ]
    }).id("playingwithfire:fluid_dip/glow_squid_hidden");
    event.custom({
        type: "lychee:item_inside",
        ghost: true,
        item_in: {
            item: "botania:cyan_shiny_flower"
        },
        block_in: {
            blocks: ["create:honey"],
            state: {
                "level": 0
            }
        },
        post: [
            {
                type:"drop_item",
                item: "minecraft:glow_ink_sac"
            }
        ]
    }).id("playingwithfire:fluid_dip/glow_squid");
})