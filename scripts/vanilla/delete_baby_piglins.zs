import crafttweaker.api.event.entity.living.MCLivingSpawnEvent;
import crafttweaker.api.events.CTEventManager;
import crafttweaker.api.data.MapData;
import crafttweaker.api.data.INumberData;

CTEventManager.register<MCLivingSpawnEvent>((event) => {
    var entity = event.getEntity();
    if (entity.getName() == "Bob")
    {
        var data = entity.getData() as MapData;
        if(data.contains("IsBaby") && data.getAt("IsBaby").asNumber() as int == 1)
        {
            data.put("IsBaby", 0 as byte);
        }
        entity.updateData(data);
    }
});