import crafttweaker.api.event.entity.player.interact.MCRightClickBlockEvent;
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.world.MCWorld;
import crafttweaker.api.tileentity.MCTileEntity;
import crafttweaker.api.data.MapData;
import crafttweaker.api.data.ICollectionData;
import crafttweaker.api.item.IItemStack;

function InsertFluid(item as IItemStack, addFluidName as string, addFluidAmount as float) as void
{
    CTEventManager.register<MCRightClickBlockEvent>((event) => {
        var result = event.getItemStack();
        var pos = event.getBlockPos();
        val world = event.player.world;
        if (result.displayName == item.displayName){
            var tileEntity = world.getTileEntity(pos) as MCTileEntity;
            var data = tileEntity.data as MapData;
            if(data.contains("machineID"))
            {
                var componentManager = new MapData(data.getAt("componentManager").asMap()) as MapData;
                if(componentManager.contains("fluids"))
                {
                    var fluids = componentManager.getAt("fluids") as ICollectionData;
                    var fluid0 = new MapData(fluids.getAt(0).asMap()) as MapData;
                    var fluidName = fluid0.getAt("FluidName").asFormattedText("", 2);
                    var fluidAmount = fluid0.getAt("Amount").asNumber();
                    if((fluidName as string == '"minecraft:empty"' || fluidName as string == ("\""+addFluidName+"\"")) && fluidAmount.getFloat() <= (5000.0f - addFluidAmount))
                    {
                        fluid0.put("FluidName", addFluidName);
                        fluid0.put("Amount", fluidAmount.getFloat() + addFluidAmount);
                        fluids.setAt(0, fluid0);
                        componentManager.put("fluids", fluids);
                        data.put("componentManager", componentManager);
                        tileEntity.updateData(data);
                        result.mutable().shrink();
                        event.cancel();
                    }
                }
            }
        }
    });
}

InsertFluid(<item:create:builders_tea>, "create:tea", 250.0f);
InsertFluid(<item:minecraft:honey_bottle>, "create:honey", 250.0f);
// InsertFluid(<item:minecraft:potion>, "create:potion", 250.0f);