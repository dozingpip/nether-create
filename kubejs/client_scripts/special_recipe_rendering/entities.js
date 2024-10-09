// In client scripts

// Some reflection to prevent the entity from being recreated every frame
// const Entity = Java.loadClass('net.minecraft.world.entity.Entity');
const Level = Java.loadClass('net.minecraft.world.level.Level');
const Entity = Java.loadClass('net.minecraft.world.entity.Entity');
const AllGuiTextures = Java.loadClass('snownee.lychee.client.gui.AllGuiTextures');
const GuiGameElement = Java.loadClass('snownee.lychee.client.gui.GuiGameElement');
const Blocks = Java.loadClass('net.minecraft.world.level.block.Blocks');
const ItemAndBlockBaseCategory = Java.loadClass('snownee.lychee.compat.jei.category.ItemAndBlockBaseCategory');
const setLevelMethod = Entity.__javaObject__.getDeclaredMethod('m_284535_', Level);
setLevelMethod.setAccessible(true);
JEIAddedEvents.registerCategories(event => {
    let verifyEntityRecipe = (r) => {
        return r.data != undefined && r.data.entity != undefined && r.data.description != undefined && r.data.offset != undefined && r.data.renderScale != undefined && r.data.output != undefined;
    }

    let handleEntityLookup = (builder, recipe) => {
        // Required because JEI doesn't seem to build a category if it has no slots
        builder.addSlot('input', 0, 15).addItemStack(recipe.data.input).setSlotName("input");
        var x = 100;
        var y = 105;
        recipe.data.output.forEach((outputItem) => 
        {
            builder.addSlot('output', x, y).addItemStack(outputItem).setSlotName("output" + x.toString() + y.toString());
            if (x + 20 < 140)
                x += 20;
            else
            {
                x = 100;
                y += 20;
            }
        })
    }

    let renderEntityRecipe = (r, guiGraphics) => {
        AllGuiTextures.JEI_ARROW.render(guiGraphics, 30, 20);
        guiGraphics.drawWordWrap(Client.font, Text.translatable(r.data.description), 0, 5, 150, 0);
        guiGraphics.drawWordWrap(Client.font, Text.translatable("drops:"), 105, 95, 100, 0);

        let poseStack = guiGraphics.pose();
        poseStack.pushPose();
        let entity = r.data.entity(Client.level);

        // This part mostly comes from looking at how patchouli does it
        poseStack.translate(58, 60, 50);
        let scale = r.data.renderScale;
        poseStack.scale(scale, scale, scale)
        poseStack.translate(r.data.offset.x, r.data.offset.y, 0);
        poseStack.mulPose(new Quaternionf().rotationZ(KMath.PI)); // Whoever decided to bind Quaternionf thank you so much
        poseStack.mulPose(new Quaternionf().rotationY(KMath.PI / 3)); // Experiment with these values, find a value you like

        let entityRenderDispatcher = Client.entityRenderDispatcher;
        entityRenderDispatcher.setRenderShadow(false);
        entityRenderDispatcher.render(entity, 0, 0, 0, 0, 1, poseStack, guiGraphics.bufferSource(), 0xF000F0);
        entityRenderDispatcher.setRenderShadow(true);

        guiGraphics.bufferSource().endBatch();
        poseStack.popPose();
        GuiGameElement.of(Blocks.FIRE.defaultBlockState())
                .rotateBlock(12.5, 202.5, 0)
                .scale(15)
                // .lighting(JEIREI.BLOCK_LIGHTING)
                .atLocal(0, 0.2, 0)
                .at(10, 10)
                .render(guiGraphics);
    }

    event.custom('kubejs:fire_entity', category => {
        let { jeiHelpers } = category;
        let { guiHelper } = jeiHelpers;

        global.fireEntityRecipeType = category
        .title("Mob spawning")
        .background(guiHelper.createBlankDrawable(150, 150))
        .icon(guiHelper.createDrawableItemStack('minecraft:flint_and_steel'))
        .isRecipeHandled(r => verifyEntityRecipe(r))
        .handleLookup((builder, r, focuses) => handleEntityLookup(builder, r, focuses))
        .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => renderEntityRecipe(r, guiGraphics))
        .recipeType;
    })
    event.custom('kubejs:other_entity', category => {
        let { jeiHelpers } = category;
        let { guiHelper } = jeiHelpers;

        global.entityRecipeType = category
        .title("Mob spawning")
        .background(guiHelper.createBlankDrawable(150, 150))
        .icon(guiHelper.createDrawableItemStack('minecraft:clock'))
        .isRecipeHandled(r => verifyEntityRecipe(r))
        .handleLookup((builder, r, focuses) => handleEntityLookup(builder, r, focuses))
        .setDrawHandler((r, recipeSlotsView, guiGraphics, mouseX, mouseY) => renderEntityRecipe(r, guiGraphics))
        .recipeType;
    })
})

JEIAddedEvents.registerRecipes(event => {
    let registerFireEntityRecipe = (entityName, inputBlock, drops, scale, offset) =>
    {
        let entity = Client.level.createEntity(entityName);
        entity.noCulling = true;
    
        event.custom('kubejs:fire_entity')
        .add({
            entity: (level) => {
                if (entity.level != level) {
                    setLevelMethod.invoke(entity, level);
                }
                return entity;
            },
            description: 'set fire to:',
            offset: {x: offset.x, y: offset.y}, // Change to specification
            renderScale: scale, // Change to specification
            input: inputBlock,
            output: drops
        });
    }
    
    let registerOtherEntityRecipe = (entityName, inputBlock, drops, scale, offset) =>
        {
            let entity = Client.level.createEntity(entityName);
            entity.noCulling = true;
        
            event.custom('kubejs:other_entity')
            .add({
                entity: (level) => {
                    if (entity.level != level) {
                        setLevelMethod.invoke(entity, level);
                    }
                    return entity;
                },
                description: 'leave exposed to air:',
                offset: {x: offset.x, y: offset.y}, // Change to specification
                renderScale: scale, // Change to specification
                input: inputBlock,
                output: drops
            });
        }
    registerFireEntityRecipe('minecraft:ghast', "minecraft:white_wool", ["minecraft:ghast_tear", "minecraft:gunpowder"], 10, {x:5, y:0})
    registerFireEntityRecipe('minecraft:enderman', "minecraft:soul_sand", ["minecraft:ender_pearl"], 30, {x:2, y:1})
    registerFireEntityRecipe('minecraft:blaze', "minecraft:quartz_block", ["minecraft:blaze_rod"], 30, {x:2, y:1})
    registerFireEntityRecipe('minecraft:wither_skeleton', "minecraft:nether_bricks", ["minecraft:wither_skeleton_skull", "minecraft:coal", "minecraft:bone"], 30, {x:2, y:1})
    registerOtherEntityRecipe('minecraft:magma_cube', "minecraft:magma_block", ["minecraft:magma_cream"], 30, {x:2, y:1})
    registerOtherEntityRecipe('minecraft:zombified_piglin', "minecraft:stripped_warped_stem", ["minecraft:rotten_flesh", "minecraft:gold_nugget", "minecraft:gold_ingot"], 30, {x:2, y:1})
})

JEIAddedEvents.registerRecipeCatalysts(event => {
    event.data.addRecipeCatalyst('minecraft:flint_and_steel', global.fireEntityRecipeType)
})