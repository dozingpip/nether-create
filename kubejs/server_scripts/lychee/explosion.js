ServerEvents.recipes(event => {
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:wheat_seeds"}],
        post: [{type:"drop_item", item: "minecraft:wheat", count:2}]
    }).id("playingwithfire:explosion/wheat");
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:melon_seeds"}],
        post: [{type:"drop_item", item: "minecraft:melon_slice", count:3}]
    }).id("playingwithfire:explosion/melon");
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:pumpkin_seeds"}],
        post: [{type:"drop_item", item: "minecraft:pumpkin", count:4}]
    }).id("playingwithfire:explosion/pumpkin");
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:beetroot_seeds"}],
        post: [{type:"drop_item", item: "minecraft:beetroot", count:3}]
    }).id("playingwithfire:explosion/beetroot");
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"botania:turntable"}],
        post: [{type:"drop_item", item: "kubejs:teatable"}]
    }).id("playingwithfire:explosion/teatable");
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:ender_pearl"}],
        post: [{type:"drop_item", item: "botania:black_lotus"}]
    }).id("playingwithfire:explosion/lotus");
});

ServerEvents.tags("item", event => {
    event.add("lychee:item_exploding_catalysts", "minecraft:white_bed");
})