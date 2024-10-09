ServerEvents.recipes(event => {
    event.remove({type:"botania:orechid"});
    let orechid = (ore, weight) =>
    {
        event.custom({
            type: "botania:orechid",
            input: { type:"block", block: "minecraft:stone" },
            output: { type:"block", block: ore },
            weight: weight
        }).id("playingwithfire:orechid/"+(ore.substring(ore.lastIndexOf(":")+1)))
    }
    orechid("minecraft:clay", 12000);
    orechid("minecraft:redstone_ore", 7654);
    orechid("minecraft:emerald_ore", 1239);
    orechid("minecraft:lapis_ore", 1079);
    orechid("minecraft:diamond_ore", 883);
    orechid("create:zinc_ore", 838);
    orechid("minecraft:prismarine", 1500);
    orechid("minecraft:sea_pickle", 883);

    event.remove({type:"botania:orechid_ignem"});
    let ignem = (ore, weight) =>
    {
        event.custom({
            type: "botania:orechid_ignem",
            input: { type:"block", block: "minecraft:netherrack" },
            output: { type:"block", block: ore },
            weight: weight
        }).id("playingwithfire:orechidignem/"+(ore.substring(ore.lastIndexOf(":")+1)))
    }

    ignem("minecraft:nether_quartz_ore", 3000);
    ignem("minecraft:red_sand", 4000);
    ignem("minecraft:nether_gold_ore", 3000);
    ignem("minecraft:ancient_debris", 400);
});