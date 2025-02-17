PlayerEvents.loggedIn(event => {
    event.player.abilities.mayfly = true
    event.player.onUpdateAbilities()
})
PlayerEvents.respawned(event => {
    event.player.abilities.mayfly = true
    event.player.onUpdateAbilities()
})
PlayerEvents.advancement(event => {
    console.log(event.advancement.id().toString())
    if (event.advancement.id().toString() == "netherdepthsupgrade:main/root")
    {
        event.player.abilities.mayfly = true
        event.player.onUpdateAbilities()
    }
})