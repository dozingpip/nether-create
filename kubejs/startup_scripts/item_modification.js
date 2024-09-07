//priority: 60
ItemEvents.modification(event => {
    event.modify('minecraft:melon_slice', item => {
      item.fireResistant = true
    })
    event.modify('minecraft:melon_seeds', item => {
      item.fireResistant = true
    })
    event.modify('minecraft:wheat_seeds', item => {
      item.fireResistant = true
    })
    event.modify('minecraft:pumpkin_seeds', item => {
      item.fireResistant = true
    })
    event.modify('minecraft:ender_pearl', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:bucket', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:lava_bucket', item => {
      item.maxStackSize = 64
    })
    event.modify('minecraft:potion', item => {
      item.maxStackSize = 64
    })
    var stack64 = ['minecraft:potion', 'minecraft:splash_potion', 'minecraft:lingering_potion', 'minecraft:music_disc_13',
      "minecraft:music_disc_pigstep"
    ];
    stack64.forEach(thing => {
      event.modify(thing, item => {
        item.maxStackSize = 64
      })
    })
})