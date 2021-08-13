import crafttweaker.api.BracketHandlers;
import crafttweaker.api.item.IItemStack;
import crafttweaker.api.blocks.MCBlock;

function flower(petal_colors as string[], petal_amts as int[], item_inputs as string[], output as string) as void
{
    // common ingredients
    // https://docs.blamejared.com/1.12/en/AdvancedFunctions/Associative_Arrays/
    val ingredients = {
    "water" : "botania:rune_water",
    "fire" : "botania:rune_fire",
    "earth" : "botania:rune_earth",
    "air": "botania:rune_air",
    "wrath" : "botania:rune_wrath",
    "sloth" : "botania:rune_sloth",
    "lust" : "botania:rune_lust",
    "gluttony" : "botania:rune_gluttony",
    "pride" : "botania:rune_pride",
    "envy" : "botania:rune_envy",
    "spring" : "botania:rune_spring",
    "summer" : "botania:rune_summer",
    "autumn" : "botania:rune_autumn",
    "winter" : "botania:rune_winter",
    "mana" : "botania:rune_mana",
    "root" : "botania:redstone_root",
    "pix" : "botania:pixie_dust",
    "life" : "botania:life_essence"
    } as string[string];

    var tea_recipe = mods.custommachinery.CMRecipeBuilder.create("playingwithfire:teatable", 20);
    
    for i, petal_color in petal_colors
    {
        tea_recipe.destroyBlockOnEnd("botania:"+petal_color+"_mushroom", -1, -1, -1, 1, 1, 1, petal_amts[i]);
    }
    for item in item_inputs
    {
        tea_recipe.requireItem(BracketHandlers.getItem(ingredients[item]));
    }
    tea_recipe.requireFluidPerTick(<fluid:create:tea>*10);
    tea_recipe.placeBlockOnEnd("botania:" + output, 0, 1, 0, 0, 1, 0);
    tea_recipe.jei();
    for item in item_inputs
    {
        tea_recipe.requireItem(BracketHandlers.getItem(ingredients[item]));
    }
    for i, petal_color in petal_colors
    {
        tea_recipe.requireItem(<item:botania:${petal_color}_mushroom>*petal_amts[i],"test"+i);
    }
    tea_recipe.requireFluidPerTick(<fluid:create:tea>*10);
    tea_recipe.produceItem(<item:botania:${output}>);
    tea_recipe.build(<item:botania:${output}>.registryName.path + "_tea");
}
flower(["lime", "green", "yellow"], [2, 1, 1], ["spring", "root"], "agricarnation");
flower(["red", "cyan"], [3, 2], ["root"], "bellethorn");
flower(["green", "orange"], [2, 1], ["root"], "bergamute");
flower(["cyan", "light_blue", "blue"], [2, 2, 2], ["root", "water","summer", "pix"], "bubbell");
flower(["light_gray", "gray", "cyan"], [2, 1, 1], ["earth"], "clayconia");
flower(["white", "brown", "yellow"], [2, 1, 1], ["air"], "daffomill");
flower(["purple", "lime", "green"], [2, 1, 1], ["water","fire","earth","life"], "dandelifeon");
flower(["black", "cyan"], [3, 2], ["root"], "dreadthorn");
flower(["red", "gray", "white"], [2, 2, 2], ["wrath", "fire"], "entropinnyum");
flower(["red", "gray"], [2, 1], ["summer", "fire"], "exoflame");
flower(["white", "yellow", "orange"], [2, 2, 1], ["spring"], "fallen_kanade");
flower(["light_gray", "yellow", "red"], [2, 2, 1], ["summer", "fire"], "gourmaryllis");
flower(["magenta", "purple", "pink"], [2, 1, 1], ["wrath", "pix"], "heisei_dream");
flower(["gray", "light_gray"], [2, 2], ["root", "air"], "hopperhock");
flower(["purple", "magenta", "green"], [2, 2, 1], ["root", "water", "autumn"], "hyacidus");
flower(["purple", "lime", "green"], [1, 1, 1], ["root", "spring"], "jaded_amaranthus");
flower(["pink", "purple", "light_gray"], [2, 1, 1], ["water", "air"], "jiyuulia");
flower(["white", "orange", "brown"], [2, 2, 2], ["gluttony", "pix"], "kekimurus");
flower(["yellow", "blue", "white", "black"], [2, 1, 1, 1], ["root", "autumn", "pix"], "labellia");
flower(["green", "gray"], [4, 1], ["sloth", "gluttony", "envy", "pix"], "loonium");
flower(["light_blue", "green", "red", "cyan"], [1, 1, 1, 1], ["root", "air"], "manastar");
flower(["gray", "yellow", "green", "red"], [1, 1, 1, 1], ["root", "fire"], "marimorphosis");
flower(["brown", "gray"], [2, 2], ["root", "earth"], "medumone");
flower(["lime", "red", "green"], [2, 2, 1], ["gluttony"], "munchdew");
flower(["lime", "green", "black"], [2, 2, 1], ["water", "summer"], "narslimmus");
flower(["red", "pink", "orange"], [2, 2, 1], ["lust", "fire"], "pollidisiac");
flower(["purple", "green", "black"], [2, 2, 1], ["earth", "pride", "pix"], "rafflowsia");
flower(["orange", "yellow"], [2, 1], ["root", "earth"], "rannuncarpus");
flower(["pink", "purple", "lime"], [2, 2, 1], ["mana"], "rosa_arcana");
flower(["purple", "magenta", "light_gray"], [2, 2, 1], ["wrath", "envy", "life"], "shulk_me_not");
flower(["brown", "red", "blue"], [2, 1, 1], ["root"], "solegnolia");
flower(["white", "light_gray", "cyan"], [2, 2, 1], ["root", "water", "envy", "pix"], "spectranthemum");
flower(["red", "green", "blue", "white"], [2, 2, 2, 2], ["air", "winter", "pix"], "spectrolus");
flower(["cyan", "gray", "light_gray"], [2, 1, 1], ["earth", "air"], "tangleberrie");
flower(["red", "orange"], [1, 2], ["fire", "earth"], "thermalily");
flower(["yellow", "brown", "orange", "lime"], [1, 1, 1, 1], ["autumn"], "tigerseye");
flower(["black", "purple", "green"], [2, 2, 1], ["root", "water", "sloth", "lust"], "vinculotus");