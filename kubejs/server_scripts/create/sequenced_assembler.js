
ServerEvents.recipes(e => {
    let inter = 'create:incomplete_precision_mechanism' // making a variable to store the transitional item makes the code more readable
    e.recipes.create.sequenced_assembly([
        Item.of('ice'), // this is the item that will appear in JEI as the result
    ], 'botania:bifrost_perm', [ // 'create:golden_sheet' is the input
        e.recipes.createCutting(inter, inter),
        e.recipes.createFilling(inter, [inter, Fluid.of('funkyfluids:liquid_crystal', 500)]),
        // the transitional item set by `transitionalItem('create:incomplete_large_cogwheel')` is the item used during the intermediate stages of the assembly
        e.recipes.createDeploying(inter, [inter, 'minecraft:wet_sponge']),
        e.recipes.createDeploying(inter, [inter, 'botania:ice_pendant']),
        e.recipes.createDeploying(inter, [inter, 'botania:laputa_shard']),
        e.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(1) // set the transitional item and the number of loops
    .id("playingwithfire:sequenced_assembly/ice");

    e.recipes.create.sequenced_assembly([
        Item.of("minecraft:sculk"),
    ], 'minecraft:warped_hyphae', [
        e.recipes.createCutting(inter, inter),
        e.recipes.createDeploying(inter, [inter, 'botania:ender_air_bottle']),
        e.recipes.createDeploying(inter, [inter, 'minecraft:shulker_shell']),
        e.recipes.createPressing(inter, inter),
    ]).transitionalItem(inter).loops(1)
    .id("playingwithfire:sequenced_assembly/sculk");
    // new SequencedAssembly(
    //     e,
    //     'minecraft:warped_hyphae',
    //     'kubejs:incomplete_ice'
    //   )
    //     .cut()
    //     .custom('Next: Mix in a mixer', (pre, post) => {
    //       e.recipes.create.compacting(post, [pre, 'minecraft:shulker_shell'])
    //     })
    //     .deploy('botania:ender_air_bottle')
    //     .press()
    //     .outputs('4x minecraft:sculk')
})