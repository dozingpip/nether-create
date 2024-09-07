//priority: 3

ServerEvents.recipes(event => {
    let trade = (output, input) =>
    {
        event.custom({
            type: 'botania:elven_trade',
            ingredients: [{ item: input }],
            output: [{ item: output}]
        })
    }
    trade("minecraft:dirt", "minecraft:warped_nylium");
    trade("minecraft:melon", "minecraft:melon_seeds");
    trade("minecraft:pumpkin", "minecraft:pumpkin_seeds");
    trade("minecraft:wheat", "minecraft:wheat_seeds");
    trade("minecraft:kelp", "minecraft:dried_kelp_block");
    // trade("minecraft:cod", "combustivefishing:combustive_cod");
    trade("minecraft:brick", "minecraft:nether_brick");
    trade("minecraft:slime_ball", "minecraft:magma_cream");
    trade("minecraft:sponge", "minecraft:fire_coral_block");
    trade("botania:orechid", "botania:orechid_ignem");
})
