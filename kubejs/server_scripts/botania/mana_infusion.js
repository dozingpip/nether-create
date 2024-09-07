ServerEvents.recipes(event => {
    let infusion = (output, input, mana, catalyst) =>
    {
        event.custom({
            type: 'botania:mana_infusion',
            input: { item: input },
            output: { item: output},
            mana: mana,
            catalyst: {type: "block", block: catalyst}
        })
    }
    infusion("minecraft:spider_eye", "botania:cosmetic_googly_eyes", 200, "botania:alchemy_catalyst");
    infusion("minecraft:sugar", "botania:mana_powder", 200, "botania:alchemy_catalyst");
    // infusion("quark:yellow_blossom_sapling", "quark:red_blossom_sapling", 100, "botania:alchemy_catalyst");
    // infusion("quark:pink_blossom_sapling", "quark:yellow_blossom_sapling", 100, "botania:alchemy_catalyst");
    // infusion("quark:orange_blossom_sapling", "quark:pink_blossom_sapling", 100, "botania:alchemy_catalyst");
    // infusion("quark:lavender_blossom_sapling", "quark:orange_blossom_sapling", 100, "botania:alchemy_catalyst");
    // infusion("quark:blue_blossom_sapling", "quark:lavender_blossom_sapling", 100, "botania:alchemy_catalyst");
    // infusion("quark:red_blossom_sapling", "quark:blue_blossom_sapling", 100, "botania:alchemy_catalyst");
    infusion("minecraft:wet_sponge", "minecraft:sponge", 10000, "botania:alchemy_catalyst");
    // infusion("minecraft:slime_ball", "tconstruct:blood_slime_ball", 200);
    event.remove({output: "minecraft:ice", type: "botania:mana_infusion"});
});