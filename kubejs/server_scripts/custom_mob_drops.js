const LootContext = Java.loadClass("net.minecraft.world.level.storage.loot.LootContext");
const LootParams = Java.loadClass("net.minecraft.world.level.storage.loot.LootParams");
const LootContextBuilder = Java.loadClass("net.minecraft.world.level.storage.loot.LootContext$Builder");
const Params = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParams");
const ParamSets = Java.loadClass("net.minecraft.world.level.storage.loot.parameters.LootContextParamSets");

LootJS.modifiers((event) => {
    event.addLootTypeModifier([LootType.ENTITY]).matchEntity((entity) => {
        entity.anyType("minecraft:glow_squid")
        entity.hasEffect("fire_resistance")
    })
    .removeLoot("minecraft:glow_ink_sac")
    event.addLootTypeModifier([LootType.ENTITY]).matchEntity((entity) => {
        entity.anyType("minecraft:guardian")
        entity.hasEffect("fire_resistance")
    })
    .removeLoot("minecraft:prismarine_shard")
    .removeLoot("minecraft:prismarine_crystals")
    .removeLoot("minecraft:cod")
    .apply((context) => {
        context.server.lootData.getLootTable("netherdepthsupgrade:gameplay/nether_fishing").getRandomItemsRaw(context.vanillaContext, (item) => {
            context.loot.add(item)
        })
    });
})