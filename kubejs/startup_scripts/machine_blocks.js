StartupEvents.registry('block', event => {
    //You can specify the render type of the block by using .renderType("type")
    //Type must be one of solid, cutout or translucent
    //Default is translucent
    event.create("kubejs:teatable", "custommachinery").machine("playingwithfire:teatable").renderType("cutout").occlude()
    event.create("kubejs:lightningmachine", "custommachinery").machine("playingwithfire:lightningmachine").renderType("cutout")
    event.create("kubejs:venus_fish_trap", "custommachinery").machine("playingwithfire:venus_fish_trap").renderType("cutout")
})