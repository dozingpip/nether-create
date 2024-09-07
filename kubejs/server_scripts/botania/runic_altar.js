ServerEvents.recipes(event => {
    let altar = (output, mana, input) =>
    {
        event.custom({
            type: 'botania:runic_altar',
            ingredients: input,
            output: {item: output},
            mana: mana
        })
    }
    event.remove({type: "botania:runic_altar", output:"botania:rune_winter"});
    altar("botania:rune_winter", 8000,
        [{item:"minecraft:cake"}, {tag: "minecraft:wool"}, {item:"botania:rune_water"}, {item:"botania:rune_earth"}, {tag:"minecraft:wool"}, {tag: "minecraft:wool"}]);
    altar("minecraft:honeycomb", 8000, [{item:"minecraft:sugar"}, {item:"minecraft:gold_block"}, {item:"minecraft:sunflower"}, {item:"botania:rune_earth"}, {item:"minecraft:oak_sapling"}, {item:"create:sweet_roll"}]);
    altar("minecraft:egg", 8000, [{item:"minecraft:wheat_seeds"}, {item:"minecraft:turtle_egg"}, {item:"minecraft:sunflower"}, {item:"minecraft:brown_mushroom"}]);
    altar("minecraft:wither_skeleton_skull", 10000, [{item:"minecraft:bone_block"}, {item:"minecraft:coal_block"}, {item:"botania:black_lotus"}, {item:"botania:rune_wrath"}, {item:"minecraft:music_disc_pigstep"}]);
    altar("create:creative_blaze_cake", 500000,
        [{item:"create:blaze_cake"},
        {item:"minecraft:music_disc_pigstep"},
        {item:"minecraft:music_disc_13"},
        {item:"minecraft:music_disc_cat"},
        {item:"minecraft:music_disc_blocks"},
        {item:"minecraft:music_disc_chirp"},
        {item:"minecraft:music_disc_far"},
        {item:"minecraft:music_disc_mall"},
        {item:"minecraft:music_disc_mellohi"},
        {item:"minecraft:music_disc_stal"},
        {item:"minecraft:music_disc_strad"},
        {item:"minecraft:music_disc_ward"},
        {item:"minecraft:music_disc_11"},
        {item:"minecraft:music_disc_wait"}]);
    altar("minecraft:spore_blossom", 5000, [{item:"minecraft:bamboo", count: 6}, {item:"botania:pink_petal"}, {item:"botania:rune_earth"}]);
    // altar("lure_1", "minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "minecraft:lure" as string}]}), 5000, "minecraft:fire_coral", "combustivefishing:combustive_cod", "minecraft:book", "botania:rune_air>);
    // altar("luck_of_the_sea_1", "minecraft:enchanted_book>.withTag({StoredEnchantments: [{lvl: 1 as short, id: "minecraft:luck_of_the_sea" as string}]}), 5000, "minecraft:ghast_tear", "combustivefishing:bone_fish", "minecraft:book", "botania:rune_water>);
});
