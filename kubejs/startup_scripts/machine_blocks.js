StartupEvents.registry('block', event => {
	//You can specify the render type of the block by using .renderType("type")
	//Type must be one of solid, cutout or translucent
	//Default is translucent
	event.create("kubejs:teatable", "custommachinery").machine("playingwithfire:teatable").renderType("solid").occlude()
	event.create("kubejs:zombie_piglin_spawner", "custommachinery").machine("playingwithfire:zombie_piglin_spawner").renderType("solid").occlude()
})