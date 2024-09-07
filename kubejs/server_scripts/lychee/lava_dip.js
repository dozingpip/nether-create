ServerEvents.recipes(event => {
    let lava_dip = (input, output, count) =>
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
            })
        }
    }
    // let lava_flow = (input, output) =>
    //     {
    //         {
    //             event.custom({
    //                 type: "customfluidmixin:block_transformation",
    //                 flowing: "#minecraft:lava",
    //                 blocks_nearby: [
    //                 ],
    //                 block_to_transform: input,
    //                 result: {
    //                     type: "block",
    //                     block: output
    //                 }
    //         })
    //     }
    // }
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
            })
        }
    }
    lava_dip("weeping_vines", "netherrack")
    fluid_dip("botania:bellows", "ancient_debris", 1, "create:chocolate")
});