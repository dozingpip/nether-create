import crafttweaker.api.Composter;
import crafttweaker.api.item.IItemStack;
function compost(input as IItemStack, amount as float) as string
{
    composter.setValue(input, amount);
    mods.jei.JEI.addInfo(input, ["Compostable, " + amount + " out of 1 chance to add a layer."]);
    return input.displayName;
}
var composterMsg = "Added as compostables: ";
composterMsg += compost(<item:minecraft:twisting_vines>, 0.35) + ", ";
composterMsg += compost(<item:minecraft:weeping_vines>, 0.35) + ", ";
composterMsg += compost(<item:minecraft:warped_roots>, 0.35) + ", ";
composterMsg += compost(<item:minecraft:warped_wart_block>, 0.15) + ", ";
composterMsg += compost(<item:botania:black_lotus>, 0.95) + ", and ";
composterMsg += compost(<item:minecraft:rotten_flesh>, 0.25);
mods.jei.JEI.addInfo(<item:minecraft:composter>, [composterMsg + "."]);