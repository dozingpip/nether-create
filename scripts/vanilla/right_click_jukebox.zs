import crafttweaker.api.event.entity.player.interact.MCRightClickBlockEvent;
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.world.MCWorld;
import crafttweaker.api.data.MapData;
import crafttweaker.api.tileentity.MCTileEntity;
import crafttweaker.api.server.MCServer;

CTEventManager.register<MCRightClickBlockEvent>((event) => {
        var pos = event.getBlockPos();
        val world = event.player.world;
        var tileEntity = world.getTileEntity(pos);
        if (tileEntity != null){
            var data = tileEntity.data as MapData;
            if(data.contains("RecordItem")){
                var record = new MapData(data.getAt("RecordItem").asMap()) as MapData;
                var disc = record.getAt("id").asFormattedText("", 1) as string;
                if(disc.startsWith('"minecraft:music_disc_')){
                    if(!world.isRemote())
                    {
                        val server = world.asServerWorld().server as MCServer;
                        var endIdx = disc.length - 1;
                        var command = "stopsound @a record minecraft:music_disc." + disc[22 .. endIdx];
                        server.executeCommand(command, event.player);
                        println(command);
                    }
                }
            }
        }
});