//priority: 70
ServerEvents.tags('item', event => {
    event.add('minecraft:saplings', ['minecraft:crimson_fungus', 'minecraft:warped_fungus'])
    event.add('forge:gems/diamond', ['create:refined_radiance'])
    event.add('forge:stone', 'minecraft:blackstone')
    event.add('forge:obsidian', ['minecraft:wither_skeleton_skull', 'create:shadow_steel'])
    event.add('forge:dirt', ['minecraft:crimson_nylium', 'minecraft:warped_nylium', 'custommachinery:custom_machine_item', 'create:zinc_block'])
  })

ServerEvents.tags('block', event => {
    event.add('forge:stone', 'minecraft:blackstone')
    event.add('forge:normal_stone', 'minecraft:blackstone')
    event.add('minecraft:dirt', ['minecraft:crimson_nylium', 'minecraft:warped_nylium', 'custommachinery:custom_machine_block'])
    event.add('botania:livingwood', ['botania:livingwood_planks', 'botania:glimmering_livingwood'])
  })