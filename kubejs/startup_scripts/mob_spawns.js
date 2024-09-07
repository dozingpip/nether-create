//spawnPlacement Startup Script
EntityJSEvents.spawnPlacement(event => {
    event.replace('minecraft:blaze', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == 'minecraft:quartz_block') {
            return true;
        }
        return false;
    });
    event.replace('minecraft:zombified_piglin', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == "minecraft:warped_hyphae") {
            return true;
        }
        return true;
    });
    event.replace('minecraft:enderman', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == 'minecraft:soul_sand') {
            return true;
        }
        return false;
    });
    event.replace('minecraft:ghast', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == 'minecraft:gravel') {
            return true;
        }
        return false;
    });
    event.replace('minecraft:piglin', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == 'minecraft:netherrack') {
            return true;
        }
        return false;
    });
    event.replace('minecraft:wither_skeleton', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == "minecraft:nether_bricks") {
            return true;
        }
        return false;
    });
    event.replace('minecraft:magma_cube', 'no_restrictions', 'world_surface', (entitypredicate, levelaccessor, spawntype, blockpos, randomsource) => {
        if (levelaccessor.level.getBlock(blockpos) == 'minecraft:magma_block') {
            return true;
        }
        return false;
    });
});