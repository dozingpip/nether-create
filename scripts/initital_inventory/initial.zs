mods.initialinventory.InvHandler.addStartingItem("bucket", <item:minecraft:bucket>);
mods.initialinventory.InvHandler.addStartingItem("lexicon", <item:botania:lexicon>);
mods.initialinventory.InvHandler.addStartingItem("naturesaura", <item:patchouli:guide_book>.withTag({"patchouli:book": "naturesaura:book" as string}));
mods.initialinventory.InvHandler.addStartingItem("angelring", <item:angelring:itemring>);
mods.initialinventory.InvHandler.addStartingItem("angelblock", <item:angelblock:angel_block>);
mods.initialinventory.InvHandler.addStartingItem("lava", <item:thermal:fluid_cell>.withTag({Properties: {FluidCre: 1.0 as double, FluidMax: 16.0 as double}, BlockEntityTag: {RSControl: {RSThreshold: 0 as int, RSMode: 0 as int}, TankInv: [{FluidName: "minecraft:lava" as string, Capacity: 32000 as int, Tank: 0 as int, Amount: 512000 as int}], AmountOut: 1000 as int, Augments: [{id: "thermal:fluid_tank_creative_augment" as string, Count: 1 as int}], Security: {SecAccess: 1 as int, SecName: "freestraws" as string, SecUUID: "0f86e081-e20b-4745-a1f4-c5e82226fde8" as string}, Sides: [2 as int, 2 as int, 2 as int, 2 as int, 2 as int, 2 as int], AmountIn: 1000 as int}}));
