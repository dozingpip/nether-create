ServerEvents.recipes(e => {
    e.recipes.create.mechanical_crafting('fire_coral_block', [
      ' DDD ',
      'D   D',
      'D P D',
      'D   D',
      ' DDD '
    ], {
      D: 'minecraft:nether_wart_block',
      P: 'botania:pixie_dust'
    }).id("playingwithfire:mechanical_crafting/fire_coral")
  })