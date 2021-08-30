import crafttweaker.api.data.ListData;
import crafttweaker.api.data.IData;
import crafttweaker.api.data.MapData;
import crafttweaker.api.item.IItemStack;

function explosion(name as string, input as IItemStack[], output as IItemStack[], weights as int[]) as void
{
    var inputs = new ListData();
    for item in input
    {
        inputs.add(
            {
                "item": item.owner + ":" + item.registryName.path,
                "count" : item.amount
            } as IData
        );
    }
    var outputEntries = new ListData();
    for i, item in output
    {
        if (item.hasTag)
        {
            outputEntries.add(
                {
                    "result": 
                    {
                        "item" : item.owner + ":" + item.registryName.path,
                        "count" : item.amount,
                        "nbt": item.tag
                    },
                    "weight": weights[i]
                } as IData
            );
        }
        else
        {
            outputEntries.add(
                {
                    "result": 
                    {
                        "item" : item.owner + ":" + item.registryName.path,
                        "count" : item.amount
                    },
                    "weight": weights[i]
                } as IData
            );
        }
    }
    <recipetype:interactio:item_explode>.addJSONRecipe(name, {
        "type": "interactio:item_explode",
        "inputs": inputs,
        "output":{
            "entries":outputEntries,
            "empty_weight":0
        }
    });
}
explosion("teatable", [<item:botania:turntable>], [<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string})], [1]);
explosion("melon", [<item:minecraft:melon_seeds>], [<item:minecraft:melon_seeds>*2, <item:minecraft:melon_slice>*4], [2, 3]);
explosion("pumpkin", [<item:minecraft:pumpkin_seeds>], [<item:minecraft:pumpkin_seeds>*2, <item:minecraft:pumpkin>], [2, 3]);
explosion("wheat", [<item:minecraft:wheat_seeds>], [<item:minecraft:wheat_seeds>*3, <item:minecraft:wheat>*2], [2, 3]);