var builder = <recipetype:create:sequenced_assembly>.builder("ice_seq")
    .transitionTo(<item:quark:light_blue_rune>)
    .require(<item:botania:bifrost_perm>)
    .loops(1)
    .addOutput(<item:minecraft:ice>, 1)
    .addStep(<recipetype:create:cutting>.factory(), (rb1) => rb1.duration(50))
    .addStep(<recipetype:create:filling>.factory(), (rb1) => rb1.require(<fluid:tconstruct:molten_cobalt>*250))
    .addStep(<recipetype:create:deploying>.factory(), (rb1) => rb1.require(<item:minecraft:wet_sponge>))
    .addStep(<recipetype:create:deploying>.factory(), (rb1) => rb1.require(<item:botania:ice_pendant>))
    .addStep(<recipetype:create:pressing>.factory(), (rb1) => rb1.duration(500));

<recipetype:create:sequenced_assembly>.addRecipe(builder);