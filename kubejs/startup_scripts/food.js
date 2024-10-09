ItemEvents.modification(event => {
    event.modify('netherdepthsupgrade:searing_cod', item => {
      item.foodProperties = food => {
          food.alwaysEdible(true)
      }
    })
})