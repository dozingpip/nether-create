EntityEvents.death("minecraft:magma_cube", event => {
    console.log(event.source.getType().toString());
    if (event.source.getType().toString() == "anvil")
    {
        var block = event.level.getBlock(event.entity.getX(), event.entity.getY(), event.entity.getZ())
        block.getDown().set("minecraft:lava");
        block.getUp().createEntity("minecraft:slime").spawn()
    }
})

EntityEvents.death("minecraft:tadpole", event => {
    console.log(event.source.getType().toString());
    var thisBlock = event.level.getBlock(event.entity.getX(), event.entity.getY(), event.entity.getZ());
    var downBlock = thisBlock.getDown(); 
    if (event.source.getType().toString() == "drown" && (thisBlock.id == "create:chocolate" || downBlock.id == "create:chocolate"))
    {
        thisBlock.getUp().createEntity("minecraft:frog").spawn();
    }
})

let fluidFromMob = (mob, fluid, amount) =>
{
    EntityEvents.hurt(mob, event => {
        var blockUnder = event.level.getBlock(event.entity.getX(), event.entity.getY(), event.entity.getZ()).getDown();
        var damage = event.getDamage()
        var finalAmount = amount * damage;
        if (blockUnder.id == "create:fluid_tank")
        {
            var tank = blockUnder.getEntityData().get("TankContent")
            if (tank.get("FluidName") == "minecraft:empty")
            {
                blockUnder.mergeEntityData({TankContent:{FluidName:fluid, Amount:finalAmount}});
            }
            else if (tank.get("FluidName") == fluid)
            {
                if (parseInt(tank.get("Amount")) + finalAmount <= 8000)
                {
                    blockUnder.mergeEntityData({TankContent:{FluidName:fluid, Amount:parseInt(tank.get("Amount"))+finalAmount}});
                }
            }
        }
    })
}

fluidFromMob("minecraft:wither_skeleton", "minecraft:milk", 1)
fluidFromMob("minecraft:skeleton", "minecraft:milk", 1)
fluidFromMob("minecraft:magma_cube", "minecraft:lava", 1)
fluidFromMob("minecraft:witch", "funkyfluids:redstone_suspension", 1)