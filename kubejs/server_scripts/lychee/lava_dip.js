ServerEvents.recipes(event => {
    let lava_dip = (input, output) =>
    {
        {
            event.custom({
                type: "lychee:item_burning",
                item_in: {
                    item: input
                },
                post: [
                    {
                        type: "place",
                        block: output
                    }
                ]
            }).id("playingwithfire:burning/" + (output.substring(output.lastIndexOf(":")+1)));
        }
    }
    let fluid_dip = (input, output, count, fluid) =>
    {
        {
            event.custom({
                type: "lychee:item_inside",
                item_in: {
                    item: input
                },
                block_in: {
                    blocks: [fluid],
                    state: {
                        "level": 0
                    }
                },
                post: [
                    {
                        type: "drop_item",
                        item: output,
                        count: count
                    },
                    {
                        type: "place",
                        block: "*"
                    }
                ]
            }).id("playingwithfire:fluid_dip/" + (output.substring(output.lastIndexOf(":")+1)));
        }
    }
    lava_dip("weeping_vines", "netherrack")
});