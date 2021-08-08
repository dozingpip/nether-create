
//removes tool part recipes from the part builder and casting table, along with recipes to melt them back into resources (will help tidy up the melting tab of JEI)
// <recipetype:tconstruct:part_builder>.removeByRegex("tconstruct:tools.*");
// <recipetype:tconstruct:casting_table>.removeByRegex("tconstruct:tools.*");
// <recipetype:tconstruct:melting>.removeByRegex("tconstruct:tools.*");

// //removes all recipes for modifiers and upgrades, only necessary if tinkers tools can be obtained in another way, but you wish to prevent them from being modified or upgraded. Also removes the JEI category
// <recipetype:tconstruct:tinker_station>.removeAll();

// //removes all severing recipes, as no tools can have severing anymore. Also removes the JEI category
// <recipetype:tconstruct:severing>.removeAll();


// //an array for all recipe names used to mold sand tool casts in the casting table
// var sand_casts = [
//         "tconstruct:smeltery/casts/sand_casts/broad_axe_head",
//         "tconstruct:smeltery/casts/sand_casts/broad_blade",
//         "tconstruct:smeltery/casts/sand_casts/hammer_head",
//         "tconstruct:smeltery/casts/sand_casts/large_plate",
//         "tconstruct:smeltery/casts/sand_casts/pickaxe_head",
//         "tconstruct:smeltery/casts/sand_casts/repair_kit",
//         "tconstruct:smeltery/casts/sand_casts/small_axe_head",
//         "tconstruct:smeltery/casts/sand_casts/small_blade",
//         "tconstruct:smeltery/casts/sand_casts/tool_binding",
//         "tconstruct:smeltery/casts/sand_casts/tool_handle",
//         "tconstruct:smeltery/casts/sand_casts/tough_handle",

//         "tconstruct:smeltery/casts/red_sand_casts/broad_axe_head",
//         "tconstruct:smeltery/casts/red_sand_casts/broad_blade",
//         "tconstruct:smeltery/casts/red_sand_casts/hammer_head",
//         "tconstruct:smeltery/casts/red_sand_casts/large_plate",
//         "tconstruct:smeltery/casts/red_sand_casts/pickaxe_head",
//         "tconstruct:smeltery/casts/red_sand_casts/repair_kit",
//         "tconstruct:smeltery/casts/red_sand_casts/small_axe_head",
//         "tconstruct:smeltery/casts/red_sand_casts/small_blade",
//         "tconstruct:smeltery/casts/red_sand_casts/tool_binding",
//         "tconstruct:smeltery/casts/red_sand_casts/tool_handle",
//         "tconstruct:smeltery/casts/red_sand_casts/tough_handle"] as string[];

// //removes all recipes in the above array
// for item in sand_casts {
//     <recipetype:tconstruct:molding_table>.removeByName(item);
// }


// //an array for all recipe names used to cast gold tool casts in the casting table
// var gold_casts = [
//         "tconstruct:smeltery/casts/gold_casts/broad_axe_head",
//         "tconstruct:smeltery/casts/gold_casts/broad_blade",
//         "tconstruct:smeltery/casts/gold_casts/hammer_head",
//         "tconstruct:smeltery/casts/gold_casts/large_plate",
//         "tconstruct:smeltery/casts/gold_casts/pickaxe_head",
//         "tconstruct:smeltery/casts/gold_casts/repair_kit",
//         "tconstruct:smeltery/casts/gold_casts/small_axe_head",
//         "tconstruct:smeltery/casts/gold_casts/small_blade",
//         "tconstruct:smeltery/casts/gold_casts/tool_binding",
//         "tconstruct:smeltery/casts/gold_casts/tool_handle",
//         "tconstruct:smeltery/casts/gold_casts/tough_handle"] as string[];

// //removes all recipes in the above array
// for item in gold_casts {
//     <recipetype:tconstruct:casting_table>.removeByName(item);
// }


//an array of all items to hide from JEI. Note that tools and tool parts cannot be hidden using craft tweaker, so I recommend using the tinkers config to only allow one material type to be shown
// var hideJEI = [
//     <item:tconstruct:pickaxe_head_cast>,
//     <item:tconstruct:small_axe_head_cast>,
//     <item:tconstruct:small_blade_cast>,
//     <item:tconstruct:hammer_head_cast>,
//     <item:tconstruct:broad_blade_cast>,
//     <item:tconstruct:broad_axe_head_cast>,
//     <item:tconstruct:tool_binding_cast>,
//     <item:tconstruct:large_plate_cast>,
//     <item:tconstruct:tool_handle_cast>,
//     <item:tconstruct:tough_handle_cast>,

//     <item:tconstruct:pickaxe_head_sand_cast>,
//     <item:tconstruct:small_axe_head_sand_cast>,
//     <item:tconstruct:small_blade_sand_cast>,
//     <item:tconstruct:hammer_head_sand_cast>,
//     <item:tconstruct:broad_blade_sand_cast>,
//     <item:tconstruct:broad_axe_head_sand_cast>,
//     <item:tconstruct:tool_binding_sand_cast>,
//     <item:tconstruct:large_plate_sand_cast>,
//     <item:tconstruct:tool_handle_sand_cast>,
//     <item:tconstruct:tough_handle_sand_cast>,

//     <item:tconstruct:pickaxe_head_red_sand_cast>,
//     <item:tconstruct:small_axe_head_red_sand_cast>,
//     <item:tconstruct:small_blade_red_sand_cast>,
//     <item:tconstruct:hammer_head_red_sand_cast>,
//     <item:tconstruct:broad_blade_red_sand_cast>,
//     <item:tconstruct:broad_axe_head_red_sand_cast>,
//     <item:tconstruct:tool_binding_red_sand_cast>,
//     <item:tconstruct:large_plate_red_sand_cast>,
//     <item:tconstruct:tool_handle_red_sand_cast>,
//     <item:tconstruct:tough_handle_red_sand_cast>] as IItemStack[];

// //hides items in the above array
// for item in hideJEI {
//     mods.jei.JEI.hideItem(item);
//     }