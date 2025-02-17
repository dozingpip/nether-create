ItemEvents.rightClicked('kubejs:bomb', e => {
    e.player.swing(e.hand, true)
    e.player.addItemCooldown('kubejs:bomb', 5*20)
  })