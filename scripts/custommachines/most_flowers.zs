import crafttweaker.api.BracketHandlers;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.blocks.MCBlock;

function flower(destroyBlocks as string[], blockAmounts as int[], itemInputs as string[], output as string) as void
{
    // common ingredients
    // https://docs.blamejared.com/1.12/en/AdvancedFunctions/Associative_Arrays/

    val colors = ["lime", "green", "yellow","red", "cyan","light_gray","gray","white", "brown","magenta","purple","pink", "blue","black","light_blue", "orange"];
    var tea_recipe = mods.custommachinery.CMRecipeBuilder.create("playingwithfire:teatable", 30);
    for i, block in destroyBlocks
    {
        tea_recipe.destroyBlockOnEnd(block in colors ? "botania:" + block + "_mushroom" : block, -1, -1, -1, 1, 1, 1, blockAmounts[i]);
    }
    for item in itemInputs
    {
        tea_recipe.requireItem(BracketHandlers.getItem(item));
    }
    tea_recipe.requireFluidPerTick(<fluid:create:tea>*10);
    tea_recipe.placeBlockOnEnd(output, 0, 1, 0, 0, 1, 0);
    tea_recipe.jei();
    for item in itemInputs
    {
        tea_recipe.requireItem(BracketHandlers.getItem(item));
    }
    var circleIndex = destroyBlocks.length % 2 == 0 ? 1 : 0;
    for i, block in destroyBlocks
    {
        tea_recipe.requireItem((block in colors ? <item:botania:${block}_mushroom> : BracketHandlers.getItem(block))*blockAmounts[i], "circle"+circleIndex);
        circleIndex += 1;
    }
    tea_recipe.requireFluidPerTick(<fluid:create:tea>*10);
    tea_recipe.requireItem(<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string}), "table_slot_input");
    tea_recipe.produceItem(<item:${output}>, "above_table_slot_output");
    tea_recipe.requireItem(<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string}), "table_slot_output");
    tea_recipe.build(<item:${output}>.registryName.path + "_tea");
}

function flowerpot(destroyBlocks as string[], itemInputs as IItemStack[], output as string) as void
{
    val potted_plants = {
        "minecraft:flower_pot" : "minecraft:flower_pot",
        "minecraft:bamboo" : "minecraft:potted_bamboo",
        "minecraft:cactus" : "minecraft:potted_cactus",
        "minecraft:sugar_cane" : "quark:potted_sugar_cane",
        "minecraft:twisting_vines" : "quark:potted_twisting_vines",
        "minecraft:wither_rose" : "minecraft:potted_wither_rose"
    } as string[string];
    val protect = ["minecraft:wither_skeleton_skull"];
    val plant = ["minecraft:twisting_vines", "minecraft:bamboo", "minecraft:sugar_cane", "minecraft:wither_rose", "minecraft:cactus"];
    var tea_recipe = mods.custommachinery.CMRecipeBuilder.create("playingwithfire:teatable", 30);
    for block in destroyBlocks
    {
        if(block in plant)
        {
            tea_recipe.requireBlock(potted_plants[block], 0, 1, 0, 0, 1, 0);
        }
        else if (block in protect)
        {
            tea_recipe.requireBlock(block, -1, -1, -1, 1, 1, 1);
        }
        else
        {
            tea_recipe.destroyBlockOnEnd(block, -1, -1, -1, 1, 1, 1);
        }
    }
    for item in itemInputs
    {
        tea_recipe.requireItem(item);
    }
    tea_recipe.destroyAndPlaceBlockOnEnd(potted_plants[output], 0, 1, 0, 0, 1, 0);
    tea_recipe.jei();
    for item in itemInputs
    {
        tea_recipe.requireItem(item);
    }
    var circleIndex = destroyBlocks.length % 2 == 0 ? 1 : 0;
    for i, block in destroyBlocks
    {
        tea_recipe.requireItem(BracketHandlers.getItem(block), block in plant ? "flower_pot_contents_input" : "circle" + circleIndex);
        circleIndex += 1;
    }
    tea_recipe.requireItem(<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string}), "table_slot_input");
    tea_recipe.requireItem(<item:minecraft:flower_pot>, "flower_pot_slot");
    tea_recipe.produceItem(<item:minecraft:flower_pot>, "above_table_slot_output");
    tea_recipe.produceItem(<item:${output}>, "flower_pot_contents_output");
    tea_recipe.requireItem(<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string}), "table_slot_output");
    tea_recipe.build(<item:${output}>.registryName.path + "_tea");
}
flower(["minecraft:nether_quartz_ore", "minecraft:nether_gold_ore", "minecraft:ancient_debris"], [1,1,1], ["botania:rune_pride", "botania:rune_greed", "botania:redstone_root", "botania:pixie_dust"], "botania:orechid_ignem");

flowerpot(["botania:black_mystical_flower", "minecraft:wither_skeleton_skull"], [<item:botania:black_lotus>], "minecraft:wither_rose");
flowerpot(["minecraft:twisting_vines"], [<item:botania:black_lotus>], "minecraft:bamboo");
flowerpot(["minecraft:twisting_vines"], [<item:minecraft:sugar>*3], "minecraft:sugar_cane");
flowerpot(["minecraft:dried_kelp_block"], [], "minecraft:cactus");