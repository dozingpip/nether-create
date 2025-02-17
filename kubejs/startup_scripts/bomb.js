global.particleBurst = (entity, particleId, count, speed, shift) => {
    shift = shift || 0; speed = speed || 0;
    entity.level.spawnParticles(particleId, true, entity.x, entity.y+entity.eyeHeight/3*2, entity.z, shift, shift, shift, count, speed);
};

function dynamite_block(entity, result) {
    const {level} = entity;
    if(level.isClientSide()) return;
    const {x, y, z} = result.blockPos;

    level.createExplosion(x, y, z).explosionMode("block").strength(1).explode();
    entity.discard();

    global.particleBurst(entity, 'lava', 8, 0.2);
};
StartupEvents.registry('entity_type', e => {
    e.create('bomb', 'entityjs:projectile')
        .item(item =>{ item.canThrow(true) })
        .sized(0.4, 0.4)
        .renderScale(0.4, 0.4, 0.4)
        .tick(entity => global.particleBurst(entity, 'smoke', 1, 0.03))
        .onHitBlock(context => dynamite_block(context.entity, context.result))
})