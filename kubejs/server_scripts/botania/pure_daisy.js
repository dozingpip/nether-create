//priority: 3
ServerEvents.recipes(event => {
    let daisy = (output, input) =>
    {
        event.custom({
            type: 'botania:pure_daisy',
            input: { type: 'block', block: input },
            output: { name: output}
        }).id("playingwithfire:pure_daisy/"+(output.substring(output.lastIndexOf(":")+1)))
    }
    daisy('minecraft:sunflower', 'minecraft:gold_block')
    daisy('botania:livingrock', 'minecraft:blackstone')
    daisy('minecraft:dried_kelp_block', 'minecraft:coal_block')
    daisy('minecraft:glowstone', 'minecraft:shroomlight')
    daisy('minecraft:white_wool', 'botania:white_petal_block')
    daisy('minecraft:nether_wart_block', 'minecraft:warped_wart_block')
    daisy('minecraft:crimson_fungus', 'minecraft:warped_fungus')
    daisy('minecraft:crimson_nylium', 'minecraft:warped_nylium')
    daisy('minecraft:big_dripleaf', 'minecraft:vine')
    daisy('minecraft:melon', 'minecraft:pumpkin')
})
