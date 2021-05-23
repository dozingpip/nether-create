mods.initialinventory.InvHandler.addStartingItem("bucket", <item:minecraft:bucket>);
mods.initialinventory.InvHandler.addStartingItem("lexicon", <item:botania:lexicon>);
mods.initialinventory.InvHandler.addStartingItem("naturesaura", <item:patchouli:guide_book>.withTag({"patchouli:book": "naturesaura:book" as string}));
mods.initialinventory.InvHandler.addStartingItem("angelring", <item:angelring:itemring>);
mods.initialinventory.InvHandler.addStartingItem("angelblock", <item:angelblock:angel_block>);
mods.initialinventory.InvHandler.addStartingItem("lava", <item:thermal:fluid_cell>.withTag({Properties: {FluidCre: 1.0 as float, FluidMax: 16.0 as float}, BlockEntityTag: {RSControl: {RSThreshold: 0 as byte, RSMode: 0 as byte}, TankInv: [{FluidName: "minecraft:lava" as string, Capacity: 32000 as int, Tank: 0 as byte, Amount: 512000 as int}], AmountOut: 1000 as int, Augments: [{id: "thermal:fluid_tank_creative_augment" as string, Count: 1 as byte}], Security: {SecAccess: 1 as byte, SecName: "freestraws" as string, SecUUID: "0f86e081-e20b-4745-a1f4-c5e82226fde8" as string}, Sides: [2, 2, 2, 2, 2, 2], AmountIn: 1000 as int}}));
