import crafttweaker.api.data.ListData;
import crafttweaker.api.data.IData;
import crafttweaker.api.data.MapData;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.CraftingTableManager;
import crafttweaker.api.item.IIngredient;
import stdlib.List;

function lavaDip(name as string, input as IItemStack[], output as IItemStack[], consume_fluid as float) as void
{
    var inputs = new ListData();
    var ingredients =  new List<IIngredient>();
    ingredients.add(<item:minecraft:lava_bucket>);
    for item in input
    {
        item.immuneToFire = true;
        for i in 0 .. item.amount{
            ingredients.add(item*1);
        }
        inputs.add(
            {
                "item": item.owner + ":" + item.registryName.path,
                "count" : item.amount
            } as IData
        );
    }
    var outputEntries = new ListData();
    for item in output
    {
        item.immuneToFire = true;
        outputEntries.add(
            {
                "result": 
                {
                    "item" : item.owner + ":" + item.registryName.path,
                    "count" : item.amount
                },
                "weight" :1
            } as IData
        );
    }
    <recipetype:interactio:item_fluid_transform>.addJSONRecipe(name, {
        "type": "interactio:item_fluid_transform",
        "inputs": inputs,
        "fluid": {
            "fluid": "minecraft:lava"
        },
        "output":{
            "entries":outputEntries,
            "empty_weight":0,
            "rolls": 1
        },
        "consume_fluid": consume_fluid
    });
    craftingTable.addShapeless(name + "_manual", output[0], ingredients as IIngredient[]);
}
lavaDip("bone_meal", [<item:minecraft:shroomlight>], [<item:minecraft:bone_meal>*4], 0.8f);
lavaDip("magma_block", [<item:minecraft:netherrack>*2], [<item:minecraft:magma_block>*8], 0.5f);
lavaDip("netherrack", [<item:minecraft:weeping_vines>], [<item:minecraft:netherrack>*4], 0.0f);
lavaDip("quartz", [<item:minecraft:soul_sand>], [<item:minecraft:quartz>*4], 0.5f);