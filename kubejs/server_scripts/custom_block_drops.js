LootJS.modifiers((event) => {
    event.addBlockLootModifier("kubejs:potted_sugar_cane").addLoot("minecraft:flower_pot").addLoot("minecraft:sugar_cane").removeLoot("kubejs:potted_sugar_cane");
    event.addBlockLootModifier("kubejs:potted_twisting_vines").addLoot("minecraft:flower_pot").addLoot("minecraft:twisting_vines").removeLoot("kubejs:potted_twisting_vines");
});