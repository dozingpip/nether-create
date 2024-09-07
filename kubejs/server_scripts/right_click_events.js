let addRemoveFluid = (player, item, fluidName, machine, full_item, empty_item, amount) =>
{
    let fluid = machine.getFluidStored("fluid")
    let result = false;
    switch(item.id)
    {
        case full_item:
            if (fluid.amount + amount <= machine.getFluidCapacity("fluid") && (fluid.id == fluidName || fluid.id == 'minecraft:empty'))
            {
                machine.addFluidToTank("fluid", Fluid.of(fluidName, amount), false)
                item.count--
                player.giveInHand(empty_item)
                result = true;
            }
            break;
        case empty_item:
            if (fluid.amount >= amount && fluid.id == fluidName)
            {
                item.count--
                machine.removeFluidFromTank("fluid", amount, false)
                player.giveInHand(full_item)
                result = true;
            }
            break;
        default:
            break;
    }
    return result;
}
BlockEvents.rightClicked(event => {
    const { block, item, player, level, server, target } = event
    if (block.id == 'custommachinery:custom_machine_block')
    {
        let machine = CustomMachine.of(block)
        let success = addRemoveFluid(player, item, "create:tea", machine, "create:builders_tea", "minecraft:glass_bottle", 500)
        // success = success || addRemoveFluid(player, item, "create:honey", machine, "minecraft:honey_bottle", "minecraft:glass_bottle", 500)
        if(success)
            event.cancel();
    }
    else if (block.id == 'minecraft:jukebox')
    {
        let nbt = block.getEntityData()
        if("RecordItem" in nbt)
        {
            let disc = nbt.RecordItem.id
            if (disc.startsWith('minecraft:music_disc_'))
            {
                Utils.server.runCommand("stopsound @a record minecraft:music_disc." + disc.substring(21, disc.length))
            }
        }
    }
    else if(block.id == 'minecraft:flower_pot')
    {
        switch(item.id)
        {
            case 'minecraft:sugar_cane':
                level.setBlock(block.pos, Block.getBlock('kubejs:potted_sugar_cane').withPropertiesOf(block.blockState), 3)
                item.count--
                break;
            case 'minecraft:twisting_vines':
                level.setBlock(block.pos, Block.getBlock('kubejs:potted_twisting_vines').withPropertiesOf(block.blockState), 3)
                item.count--
                break;
            default:
                break;
        }
    }
    else if(block.id == 'kubejs:potted_sugar_cane')
    {
        player.giveInHand('minecraft:sugar_cane')
        level.setBlock(block.pos, Block.getBlock('minecraft:flower_pot').withPropertiesOf(block.blockState), 3)
    }
    else if(block.id == 'kubejs:potted_twisting_vines')
    {
        player.giveInHand('minecraft:twisting_vines')
        level.setBlock(block.pos, Block.getBlock('minecraft:flower_pot').withPropertiesOf(block.blockState), 3)
    }
})