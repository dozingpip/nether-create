ServerEvents.recipes(event => {
    event.shapeless('minecraft:lava_bucket', [
        'minecraft:bucket',
        'minecraft:magma_cream'
    ])
    event.shapeless('minecraft:warped_nylium', [
        'minecraft:warped_roots',
        'minecraft:netherrack'
    ])
    event.shapeless('minecraft:crimson_nylium', [
        'minecraft:crimson_roots',
        'minecraft:netherrack'
    ])
    event.shapeless('16x minecraft:stick', [
        '2x #minecraft:logs'
    ])
    event.shapeless('minecraft:dead_fire_coral_block', [
        '4x minecraft:dead_fire_coral'
    ])
    event.shapeless('minecraft:fire_coral_block', [
        '4x minecraft:fire_coral'
    ])
    event.shapeless('minecraft:fire_coral_block', [
        'minecraft:dead_fire_coral_block',
        'minecraft:wet_sponge'
    ])
    event.shapeless('4x minecraft:fire_coral', [
        'minecraft:fire_coral_block'
    ])
    event.shapeless('minecraft:string', [
        '9x minecraft:warped_roots'
    ])
    event.shapeless('minecraft:warped_fungus', [
        '4x minecraft:warped_roots'
    ])
    event.shapeless('create:dough', [
        'create:wheat_flour',
        Item.of('minecraft:potion', '{Potion:"minecraft:awkward}')
    ])
    event.shapeless('minecraft:iron_ingot', [
        'minecraft:magma_cream',
        'minecraft:bone_block',
        'minecraft:bone_block',
        'minecraft:bone_block'
    ])
    event.shaped('minecraft:hopper', [
        'G G',
        'GCG',
        ' G '
        ],
        {
            G: 'minecraft:gold_ingot',
            C: 'minecraft:chest'
        })
    //craftingTable.addShapeless("sandpaper", <item:create:sand_paper>, [<item:tconstruct:pattern>, <item:minecraft:sand>]);
    //craftingTable.addShapeless("charcoal_block", <item:quark:charcoal_block>, [<item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>, <item:minecraft:charcoal>]);
    // craftingTable.addShapeless("charcoal_block_uncompress", <item:minecraft:charcoal>*4, [<item:quark:charcoal_block>]);
})