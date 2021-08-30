var builder = <recipetype:create:sequenced_assembly>.builder("ice")
    .transitionTo(<item:quark:light_blue_rune>)
    .require(<item:botania:bifrost_perm>)
    .loops(1)
    .addOutput(<item:minecraft:ice>, 1)
    .addStep(<recipetype:create:filling>.factory(), (rb) => rb.require(<fluid:tconstruct:molten_cobalt>*250))
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:minecraft:wet_sponge>))
    .addStep(<recipetype:create:deploying>.factory(), (rb) => rb.require(<item:botania:ice_pendant>))
    .addStep(<recipetype:create:cutting>.factory(), (rb1) => rb1.duration(50));

<recipetype:create:sequenced_assembly>.addRecipe(builder);