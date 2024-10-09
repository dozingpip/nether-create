//priority: 3

ServerEvents.recipes(event => {
    let trade = (output, input) =>
    {
        event.custom({
            type: 'botania:elven_trade',
            ingredients: [{ item: input }],
            output: [{ item: output}]
        }).id("playingwithfire:elven_trade/"+(output.substring(output.lastIndexOf(":")+1)))
    }
    trade("minecraft:cobblestone", "minecraft:netherrack");
    trade("minecraft:dirt", "minecraft:warped_nylium");
    trade("minecraft:kelp", "minecraft:dried_kelp");
    trade("minecraft:brick", "minecraft:nether_brick");
    trade("minecraft:slime_ball", "minecraft:magma_cream");
    trade("minecraft:sponge", "minecraft:fire_coral_block");
    trade("botania:orechid", "botania:orechid_ignem");
    trade("minecraft:cod", "netherdepthsupgrade:searing_cod");
    trade("minecraft:pufferfish", "netherdepthsupgrade:lava_pufferfish");
})
