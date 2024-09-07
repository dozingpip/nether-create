ServerEvents.recipes(event => {
    let plate = (output, mana, input) =>
    {
        event.custom({
            type: 'botania:terra_plate',
            ingredients: input,
            result: {item: output},
            mana: mana
        })
    }


    plate("botania:infinite_fruit", 20000, [{item:"minecraft:cake"},
        {item:"minecraft:pufferfish"}, {item:"botania:mana_cookie"}, {item:"create:sweet_roll"}, {item:"create:chocolate_glazed_berries"},
        {item:"create:honeyed_apple"}, {item:"create:builders_tea"}, {tag:"minecraft:music_discs"}]);
    plate("botania:king_key", 20000, [
        {item:"netherdepthsupgrade:lava_fishing_rod"}, {item:"botania:star_sword"}, {item:"botania:flare_chakram"}, {item:"create:potato_cannon"}, {tag:"minecraft:music_discs"}]);
    plate("botania:flugel_eye", 20000, [{item:"minecraft:lodestone"},
        {item:"minecraft:shulker_spawn_egg"}, {item:"botania:third_eye"}, {item:"botania:light_relay"}, {tag:"minecraft:music_discs"}]);
    plate("minecraft:nether_star", 20000, [{item:"botania:king_key"},
        {item:"minecraft:wither_skeleton_skull"}, {tag:"minecraft:music_discs"}]);
    plate("botania:life_essence", 30000, [{item:"minecraft:fire_coral_block"},
        {item:"minecraft:beacon"}, {item:"botania:gaia_pylon"}, {tag:"minecraft:music_discs"}]);
    plate("minecraft:deepslate_diamond_ore", 2000, [{item:"create:powdered_obsidian"},
        {item:"minecraft:lapis_lazuli"}, {item:"botania:manasteel_nugget"}]);
});