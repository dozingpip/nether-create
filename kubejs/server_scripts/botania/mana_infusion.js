ServerEvents.recipes(event => {
    let infusion_catalyst = (output, input, mana, catalyst) =>
    {
        event.custom({
            type: 'botania:mana_infusion',
            input: { item: input },
            output: { item: output},
            mana: mana,
            catalyst: {type: "block", block: catalyst}
        }).id("playingwithfire:mana_infusion/"+(output.substring(output.lastIndexOf(":")+1)))
    }
    let infusion = (output, input, mana) =>
    {
        event.custom({
            type: 'botania:mana_infusion',
            input: { item: input },
            output: { item: output},
            mana: mana,
        }).id("playingwithfire:mana_infusion/"+(output.substring(output.lastIndexOf(":")+1)))
    }
    infusion_catalyst("minecraft:spider_eye", "botania:cosmetic_googly_eyes", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:sugar", "botania:mana_powder", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:chorus_fruit", "minecraft:golden_apple", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:wet_sponge", "minecraft:sponge", 10000, "botania:alchemy_catalyst");
    event.remove({output: "minecraft:ice", type: "botania:mana_infusion"});
    event.remove({output: "minecraft:vine", type: "botania:mana_infusion"});
    infusion_catalyst("minecraft:glow_lichen", "minecraft:lily_pad", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:vine", "minecraft:glow_lichen", 200, "botania:alchemy_catalyst");

    infusion_catalyst("minecraft:horn_coral", "minecraft:fire_coral", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:fire_coral", "minecraft:bubble_coral", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:bubble_coral", "minecraft:brain_coral", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:brain_coral", "minecraft:tube_coral", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:tube_coral", "minecraft:horn_coral", 200, "botania:alchemy_catalyst");

    infusion_catalyst("minecraft:horn_coral_fan", "minecraft:fire_coral_fan", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:fire_coral_fan", "minecraft:bubble_coral_fan", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:bubble_coral_fan", "minecraft:brain_coral_fan", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:brain_coral_fan", "minecraft:tube_coral_fan", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:tube_coral_fan", "minecraft:horn_coral_fan", 200, "botania:alchemy_catalyst");

    infusion_catalyst("minecraft:horn_coral_block", "minecraft:fire_coral_block", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:fire_coral_block", "minecraft:bubble_coral_block", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:bubble_coral_block", "minecraft:brain_coral_block", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:brain_coral_block", "minecraft:tube_coral_block", 200, "botania:alchemy_catalyst");
    infusion_catalyst("minecraft:tube_coral_block", "minecraft:horn_coral_block", 200, "botania:alchemy_catalyst");

    infusion_catalyst("minecraft:pink_petals", "botania:pink_petal", 200, "botania:alchemy_catalyst");
    infusion("botania:mana_diamond", "create:refined_radiance", 10000);
});