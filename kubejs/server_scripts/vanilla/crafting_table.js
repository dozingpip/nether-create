ServerEvents.recipes(event => {
    event.shapeless('minecraft:lava_bucket', [
        'minecraft:bucket',
        'minecraft:magma_cream'
    ]).id("playingwithfire:lava_bucket")
    event.shapeless('minecraft:warped_nylium', [
        'minecraft:warped_roots',
        'minecraft:netherrack'
    ]).id("playingwithfire:warped_nylium")
    event.shapeless('minecraft:crimson_nylium', [
        'minecraft:crimson_roots',
        'minecraft:netherrack'
    ]).id("playingwithfire:crimson_nylium")
    event.shapeless('16x minecraft:stick', [
        '2x #minecraft:logs'
    ]).id("playingwithfire:sticks")
    event.shapeless('minecraft:dead_fire_coral_block', [
        '4x minecraft:dead_fire_coral'
    ]).id("playingwithfire:deadfirecoralblock")
    event.shapeless('minecraft:fire_coral_block', [
        '4x minecraft:fire_coral'
    ]).id("playingwithfire:fire_coral_to_block")
    event.shapeless('minecraft:fire_coral_block', [
        'minecraft:dead_fire_coral_block',
        'minecraft:wet_sponge'
    ]).id("playingwithfire:dead_fire_coral_to_wet_block")
    event.shapeless('4x minecraft:fire_coral', [
        'minecraft:fire_coral_block'
    ]).id("playingwithfire:fire_coral_from_block")
    event.shapeless('minecraft:string', [
        '9x minecraft:warped_roots'
    ]).id("playingwithfire:roots_to_string")
    event.shapeless('minecraft:warped_fungus', [
        '4x minecraft:warped_roots'
    ]).id("playingwithfire:roots_to_fungus")
    event.shapeless('minecraft:dried_kelp', [
        '2x netherdepthsupgrade:warped_kelp'
    ]).id("playingwithfire:warped_to_dried_kelp")
    event.shapeless('minecraft:warped_fungus', [
        '2x netherdepthsupgrade:warped_seagrass'
    ]).id("playingwithfire:warped_to_fungus")
    event.shaped('minecraft:hopper', [
        'G G',
        'GCG',
        ' G '
        ],
        {
            G: 'minecraft:gold_ingot',
            C: 'minecraft:chest'
        }).id("playingwithfire:hopperwithgold")
    event.remove({ output: 'netherdepthsupgrade:lava_fishing_rod' })
    event.shaped('netherdepthsupgrade:lava_fishing_rod',
        [
            '  B',
            ' BI',
            'B R'
        ],
        {
            B: 'minecraft:blaze_rod',
            I: 'minecraft:chain',
            R: 'minecraft:rotten_flesh'
        }
    ).id("playingwithfire:lava_fishing_rod")
    event.shaped('kubejs:lightningmachine',
        [
            ' E ',
            'PLP',
            ' C '
        ],
        {
            E: 'create:electron_tube',
            P: 'botania:prism',
            L: 'botania:light_relay',
            C: 'create:copper_sheet'
        }
    ).id("playingwithfire:lightning_machine")
})