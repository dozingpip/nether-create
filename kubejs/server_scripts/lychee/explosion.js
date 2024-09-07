ServerEvents.recipes(event => {
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:wheat_seeds"}],
        post: [{type:"drop_item", item: "minecraft:wheat", count:2}]
    });
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:melon_seeds"}],
        post: [{type:"drop_item", item: "minecraft:melon_slice", count:3}]
    });
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"minecraft:pumpkin_seeds"}],
        post: [{type:"drop_item", item: "minecraft:pumpkin", count:4}]
    });
    event.custom({
        type: "lychee:item_exploding",
        item_in: [{item:"botania:turntable"}],
        post: [{type:"drop_item", item: "kubejs:teatable"}]
    });
});

ServerEvents.tags("item", event => {
    event.add("lychee:item_exploding_catalysts", "kubejs:teatable");
    event.add("lychee:item_exploding_catalysts", "minecraft:wheat");
    event.add("lychee:item_exploding_catalysts", "minecraft:melon");
    event.add("lychee:item_exploding_catalysts", "minecraft:pumpkin");
})