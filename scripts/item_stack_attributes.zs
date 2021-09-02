import crafttweaker.api.item.IItemStack;

// immune to fire
<item:minecraft:magma_cream>.immuneToFire = true;
<item:minecraft:lava_bucket>.immuneToFire = true;
<item:minecraft:bucket>.immuneToFire = true;
<item:create:water_wheel>.immuneToFire = true;
<item:minecraft:ghast_tear>.immuneToFire = true;
<item:minecraft:gunpowder>.immuneToFire = true;
<item:minecraft:blaze_rod>.immuneToFire = true;

// burn time
<item:minecraft:potion>.withTag({Potion: "minecraft:awkward" as string}).burnTime = 400;
<item:botania:black_lotus>.burnTime = 1600;
<item:minecraft:warped_roots>.burnTime = 200;
<item:minecraft:twisting_vines>.burnTime = 400;
<item:minecraft:weeping_vines>.burnTime = 400;
<item:minecraft:rotten_flesh>.burnTime = 100;

// blast resistance
<block:create:shadow_steel_casing>.blastResistance = 1200;
<block:botania:elementium_block>.blastResistance = 1200;

// stack size
<item:minecraft:potion>.maxStackSize = 16;
for item in <tag:items:minecraft:music_discs>.getElements()
{
    (item as IItemStack).maxStackSize = 16;
}


// tags
<tag:items:minecraft:saplings>.add([<item:minecraft:crimson_fungus>, <item:minecraft:warped_fungus>]);
<tag:items:forge:gems/diamond>.add(<item:create:refined_radiance>);
<tag:items:forge:obsidian>.add([<item:minecraft:wither_skeleton_skull>, <item:create:shadow_steel>]);
<tag:items:forge:stone>.add(<item:minecraft:blackstone>);
<tag:blocks:forge:stone>.add(<block:minecraft:blackstone>);
<tag:blocks:forge:dirt>.add([<block:minecraft:crimson_nylium>, <block:minecraft:warped_nylium>, <block:custommachinery:custom_machine_block>]);