//biomeSpawns Server Script
EntityJSEvents.biomeSpawns(event => {
    event.removeSpawn('minecraft:zombified_piglin', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:skeleton', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:wither_skeleton', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:blaze', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:magma_cube', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:piglin', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:ghast', ['#minecraft:is_nether']);
    event.removeSpawn('minecraft:enderman', ['#minecraft:is_nether']);
});