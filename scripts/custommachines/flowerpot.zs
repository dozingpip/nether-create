import crafttweaker.api.item.IItemStack;
import crafttweaker.api.BracketHandlers;
import stdlib.List;
val colors = ["lime", "green", "yellow","red", "cyan","light_gray","gray","white", "brown","magenta","purple","pink", "blue","black","light_blue", "orange"];
val skip = [<item:botania:orechid_ignem>, <item:botania:orechid>];
for recipe in <recipetype:botania:petal_apothecary>.getAllRecipes()
{
    if (recipe.output in skip){
        continue;
    }
    var flower = mods.custommachinery.CMRecipeBuilder.create("playingwithfire:teatable", 20);
    var petals = new List<IItemStack>();
    var petalBlocks = new List<string>();
    var other_ingredients = new List<IItemStack>();
    flower.requireFluidPerTick(<fluid:create:tea>*10);
    for ingredient in recipe.ingredients
    {
        if(ingredient.items.length >= 1 && <tag:items:botania:petals>.asIIngredient().matches(ingredient.items[0]))
        {
            for color in colors
            {
                if (<tagManager:items>.getTag("botania:petals/"+color).asIIngredient().matches(ingredient.items[0])){
                    var mushroom = BracketHandlers.getItem("botania:" + color + "_mushroom");
                    if (mushroom in petals)
                    {
                        var index = petals.indexOf(mushroom);
                        petals[index] = petals[index]*(petals[index].amount +1);
                    }
                    else
                    {
                        petalBlocks.add("botania:" + color + "_mushroom");
                        petals.add(mushroom);
                    }
                    break;
                }
            }
        }
        else if(ingredient.items.length >= 1)
        {
            flower.requireItem(ingredient.items[0]);
            other_ingredients.add(ingredient.items[0]);
        }
    }
    var amountIndex = 0;
    for petal in petalBlocks
    {
        flower.destroyBlockOnEnd(petal,  -1, -1, -1, 1, 1, 1, petals[amountIndex].amount);
        amountIndex += 1;
    }
    flower.placeBlockOnEnd(recipe.output.owner+ ":" + recipe.output.registryName.path, 0, 1, 0, 0, 1, 0);
    flower.jei();
    for ing in other_ingredients
    {
        flower.requireItem(ing);
    }
    var petalIndex = 0;
    var circleIndex = petals.length % 2 == 0 ? 1 : 0;
    for petal in petals
    {
        flower.requireItem(petal, "circle" + petalIndex);
        petalIndex += 1;
        circleIndex += 1;
    }
    flower.requireFluidPerTick(<fluid:create:tea>*10);
    flower.produceItem(recipe.output, "above_table_slot_output");
    flower.requireItem(<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string}), "table_slot_input");
    flower.requireItem(<item:custommachinery:custom_machine_item>.withTag({machine: "playingwithfire:teatable" as string}), "table_slot_output");
    flower.build(recipe.output.registryName.path + "_tea");
}

<recipetype:botania:petal_apothecary>.removeAll();