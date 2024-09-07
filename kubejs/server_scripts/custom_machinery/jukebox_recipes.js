ServerEvents.recipes(event => {

  event.recipes.custommachinery.custom_machine("playingwithfire:teatable", 100)
  .requireBlock("minecraft:jukebox", true, -1, -1, -1, 1, 1, 1, 1)
  .destroyBlockOnEnd("minecraft:nether_gold_ore", true, -1, -1, -1, 1, 1, 1, 1)
  .requireEntities(1, 10, "minecraft:piglin", true)
  .requireFluidPerTick(Fluid.of("create:tea", 10))
  .destroyAndPlaceBlockOnEnd("minecraft:jukebox[has_record=true]{RecordItem:{id:\"minecraft:music_disc_pigstep\", Count:1b}}", -1, -1, -1, 1, 1, 1, 1, "minecraft:jukebox", true)
  .runCommandOnEnd("/playsound minecraft:music_disc.pigstep record @a")
  .runCommandEachTick("/particle botania:wisp 0.35 .5 0 .85 0.75 true false ~ ~1 ~ 0 0 0 1 5")
  .runCommandOnEnd("/particle minecraft:note ~ ~1 ~ .5 .5 .5 0.5 5")
  .jei()
  .requireItem("minecraft:jukebox", "flower_pot_slot")
  .requireItem("minecraft:nether_gold_ore", "circle1")
  .requireItem("minecraft:piglin_spawn_egg", "circle2")
  .requireFluidPerTick(Fluid.of("create:tea", 10))
  .requireItem(Item.of("kubejs:teatable"), "table_slot_input")
  .produceItem("minecraft:music_disc_pigstep", "above_table_slot_output")
  .requireItem("minecraft:jukebox", "flower_pot_slot2")
  .requireItem(Item.of("kubejs:teatable"), "table_slot_output")
})