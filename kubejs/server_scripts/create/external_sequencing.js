// priority: 5

    const $JsonUtils = Java.loadClass('dev.latvian.mods.rhino.mod.util.JsonUtils')

    // External Sequencing Script Version: 1.1.2-1.20
    /*
        TODO
    
        Send External Step Recipe IDs from Server to Client to hide
        
        Tooltip system for Ext Sequence recipes when Create is not installed (aka the -C edition)
        
        Option to not send First Loop and/or Final Step Recipe IDs
    */
    
    //Sequencing

    // Namespace to use for recipes created by this function
    var packID = 'playingwithfire';

    // for a future feature, automatic hiding of External Sequence step recipes from JEI to reduce clutter in JEI.
    // cause do you really need 50 pages of basically the same recipe thanks to your 200 loop sequence?
    var autoHideExtSteps = true;
    
    var createLoaded = Platform.isLoaded('create');
    var extStepRecipeIDs = [];
    
    if(!createLoaded){
        console.log('Create not found! only External Sequencing is available without Create!');
    }
    
    global.sequenceRecipeIDsToHide = [];

    /**
    @param {ItemStackJS[] / string[]} outputs
    @param {IngredientJS / string} base
    @param {map[]} sequence
    @param {int} seqLoops
    @param {string} transitional
    @param {string} id
    @param {RecipeEventJS} event
    */
    const addExtSequenceRecipe = (outputs, base, sequence, seqLoops, transitional, id, event) => {
        
        let constructedSequence = [];
        let sequenceStep = 1;
        let totalSteps = sequence.length * seqLoops;
        
        console.log('Beginning addition of Recipe \''+ packID +':sequencing/'+ id +'\' with '+ sequence.length +' Steps and '+ seqLoops +' Loops. (total of '+ totalSteps +' steps)');
        
        sequence.forEach((step) => {
            
            let estStep = sequenceStep;
            
            // Normal Sequencing steps
            if(createLoaded){
                switch(step.type) {
                    case 'deploy':
                        if(step.keepItem){
                            constructedSequence.push(event.recipes.createDeploying(transitional, [transitional, step.input]).keepHeldItem());
                        } else {
                            constructedSequence.push(event.recipes.createDeploying(transitional, [transitional, step.input]));
                        }
                        break;
                    case 'press':
                        constructedSequence.push(event.recipes.createPressing(transitional, transitional));
                        break;
                    case 'cut':
                        constructedSequence.push(event.recipes.createCutting(transitional, transitional).processingTime(step.time));
                        break;
                    case 'fill':
                        constructedSequence.push(event.recipes.createFilling(transitional, [transitional, step.fluid]));
                        break;
                    case 'external':
                        break;
                    default:
                        console.log(`Invalid Step Type "${step.type}" in sequenced recipe "${id}"!`);
                        break;
                }
            }
            //External Sequencing
            if(step.type == 'external'){
                
                //Dummy Lore Assembly
                if(createLoaded){
                    let constructedLore = [];
                    let newPart = '';
                    step.info.forEach((component) => {
                        if(component.length > 0) newPart = JSON.stringify(component);
                        if(component.length == undefined) newPart = JSON.stringify(component);
                        constructedLore.push(`'${newPart}'`);
                    })
                    // Push Dummy step to Sequence
                    console.log(constructedLore)
                    console.log(`{display:{Lore:[${constructedLore}]},Unobtainble:1b}`)
                    console.log(Item.of(step.dummy, `{display:{Lore:[${constructedLore}]},Unobtainble:1b}`))
                    constructedSequence.push(event.recipes.createDeploying(transitional, [transitional, Item.of(step.dummy, `{display:{Lore:[${constructedLore}]},Unobtainble:1b}`)]));
                }
                
                // Begin creating External Step(s)
                
                while (estStep <= totalSteps) {
                    //Determine Progress float values for Input and Output of upcoming recipe
                    let estProgress = (1 / (totalSteps / (estStep - 1))) + 'f';
                    let nextProgress = (1 / (totalSteps / estStep)) + 'f';
                    
                    let genID = `${packID}:external_sequencing/${id}/step_${estStep}`;
                    
                    extStepRecipeIDs.push(genID);
                    
                    global.sequenceRecipeIDsToHide.push(genID);
                    
                    let preItem = '';
                    let postItem = '';
                    
                    //Check if current Step is the first, if it is, use the "Base" item as the Input of the step
                    if(sequenceStep != 1){
                        preItem = Item.of(transitional, `{SequencedAssembly:{Progress:${estProgress},Step:${(estStep -1)},id:"${packID}:sequencing/${id}"}}`);
                    } else {
                        preItem = base;
                    }
                    
                    //Check if current Step is the last, if it is, use the first "Output" item as the Result of the step
                    if(estStep != totalSteps){
                        postItem = Item.of(transitional, `{SequencedAssembly:{Progress:${nextProgress},Step:${estStep},id:"${packID}:sequencing/${id}"}}`);
                    } else if(step.outputisarray){
                        //this is technically a useless feature for one-loop recipes, since you can achieve the same effect by defining the other items in the final step's recipe, but is essential for recipes with an actual number of loops.
                        postItem = outputs;
                    } else {
                        postItem = outputs[0];
                    }
                    
                    //Convert item info to JSON format if value of "json_format" element in step info is true
                    if(step.json_format){
                        preItem = preItem.toJson();
                        postItem = postItem.toJson();
                    } else if(step.json_format == 'undefined'){
                        console.warn(`External Step #${estStep} in recipe "${genID}" does not have a json_format flag, this may cause errors!`);
                    }
                    
                    //Log External Sequence step info
                    console.log(`Adding EXT Sequence Step #${estStep} : ${preItem} --TO-> ${postItem}`);
                    
                    //Run step recipe
                    step.recipedata(postItem, preItem, genID);
                    
                    //Increase the value of "estStep" as long as it is less than the value of "totalSteps", to make the while loop end when recipes for each loop are registered for this step
                    if(estStep <= totalSteps){
                        estStep += sequence.length;
                    }
                }
                
            }
            //Move to next Step
            sequenceStep++;
        })
        //Register Sequence Recipe
        if(createLoaded){
            event.recipes.createSequencedAssembly(outputs, base, constructedSequence).loops(seqLoops).transitionalItem(transitional).id(`${packID}:sequencing/${id}`);
        }
    }


//Example Recipes
// To enable Example recipes, add another / to the front of the multiline comment opener before them

//*
// Example of Ext Sequence Recipe using JSON-based and KJS builtin/Functions
// ServerEvents.recipes(event => {
//     addExtSequenceRecipe(['minecraft:diamond'], 'minecraft:gravel',
//         [
//             // Adds a standard Sequenced Assembly Pressing step.
//             {'type': 'press'},
//             // Adds a standard Sequenced Assembly Cutting step, time element is required.
//             {'type': 'cut', 'time': 50},
//             // Adds an External step in JSON format, to smith Iron Bars with the Sequence's Transitional Item
//             {
//                 'type': 'external',
//                 // External steps add a "fake" Deploying Step which is intended to not be able to actually be performed, the dummy and info elements define what is shown as the "input" for this impossible step.
//                 'dummy': 'minecraft:smithing_table',
//                 // Info is written in JSON Text Component structure, it may be tedious to write, but it allows an incredible degree of customization with minimal work on the side of script devlopment.
//                 'info': [{
//                     'translate': `${packID}.external_sequencing.extsequence_test.3.smithing.info`,
//                     'color': 'gold',
//                     'bold': true
//                 }],
//                 // a Flag element to define if the recipe should JSON-ify the "post" and "pre" items for this step.
//                 // Will act as if false if it is not found, but will print a warning in the KJS server log.
//                 'json_format': true,
//                 //A variable-assigned function for the External step's recipe, using a Smithing JSON recipe definition.
//                 'recipedata': (post, pre, id) => event.custom({
//                     //Smithing is funky since it copies the base's NBT to the output, so you need to put the input as the secondary, and can't have NBT on the base, unless you want to have an impossible step
//                     'type': 'minecraft:smithing_transform',
//                     'base': { 'item': 'minecraft:iron_bars' },
//                     'template': Item.of('minecraft:stone_pressure_plate'),
//                     'addition': pre,
//                     'result': post
//                 }).id(id)
//             },
//             // Adds a standard Sequenced Assembly Filling step.
//             {'type': 'fill', 'fluid': Fluid.of('minecraft:water', 500)},
//             // Adds a standard Sequenced Assembly Deploying step
//             {
//                 'type': 'deploy',
//                 'input': 'minecraft:iron_block',
//                 // keepItem element sets the 'keepHeldItem' property in the recipe, which determines if the item will be consumed when deployed onto the sequence item.
//                 // will act as if false if it is not found.
//                 'keepItem': true
//             },
//             // Adds an External step using a native KJS method.
//             {
//                 'type': 'external',
//                 'dummy': 'minecraft:furnace',
//                 'info': [
//                     [{
//                         'text': 'Process item in ',
//                         'color': '#FF0000'
//                     },
//                     {
//                         'text': 'this ',
//                         'color': 'aqua'
//                     },
//                     {
//                         'text': 'Device!',
//                         'color': '#FF0000'
//                     }],
//                     [{
//                         'text': 'Smoker and Blast Furnace ',
//                         'color': 'gold'
//                     },
//                     {
//                         'text': 'are not valid!',
//                         'color': 'red'
//                     }]
//                 ],
//                 'json_format': false,
//                 //Variable-assigned function using the native KJS method for Furnace recipes
//                 'recipedata': (post, pre, id) => event.smelting(post, pre).id(id)
//             }
//         ],
//         2, // Amount of Sequence Loops in the recipe
//         'minecraft:flint', // "Transitional Item" of the recipe.
//         'extsequence_test_diamond', // Recipe's ID, used in both the IDs of the steps and the actual recipe.
//         event // a Recipe Event, so that Recipe Event methods and functions can be executed inside of the function properly.
//     )
// addExtSequenceRecipe(['minecraft:sculk'], 'minecraft:warped_hyphae',
//     [
//         // Adds a standard Sequenced Assembly Cutting step, time element is required.
//         {'type': 'cut', 'time': 50},
//         // Adds a standard Sequenced Assembly Deploying step
//         {
//             'type': 'deploy',
//             'input': 'botania:ender_air_bottle'
//         },
//         // Adds an External step using a native KJS method.
//         {
//             'type': 'external',
//             'dummy': 'create:mechanical_press',
//             'info':[],
//             'json_format': false,
//             //Variable-assigned function using the native KJS method for Furnace recipes
//             'recipedata': (post, pre, id) => event.recipes.create.compacting(post, [pre, 'minecraft:shulker_shell']).id(id)
//         },
//         // Adds a standard Sequenced Assembly Pressing step.
//         {'type': 'press'},
//     ],
//     2, // Amount of Sequence Loops in the recipe
//     'minecraft:sculk_vein', // "Transitional Item" of the recipe.
//     'shulk_to_sculk', // Recipe's ID, used in both the IDs of the steps and the actual recipe.
//     event // a Recipe Event, so that Recipe Event methods and functions can be executed inside of the function properly.
// )
// })
// //*/

// //*
// // Example using recipetype that supports full output Arrays as final step.
// ServerEvents.recipes(event => {
//     addExtSequenceRecipe(['minecraft:dirt', 'minecraft:grass'], 'minecraft:grass_block',
//         [
//             {'type': 'press'},
//             {
//                 'type': 'external',
//                 'dummy': 'create:millstone',
//                 'info': [
//                     {
//                         'text': 'Centrifuge in a Mechanical Mixer.',
//                         'color': 'gold'
//                     },
//                     [{
//                         'text': 'This step outputs ',
//                         'color': 'gold'
//                     },
//                     {
//                         'text': 'Multiple items!',
//                         'color': '#DB3DD6'
//                     }]
//                 ],
//                 // Uses the full array of outputs given as the result of the absolute final step, instead of just the first entry.
//                 // not necessary in recipes with a Loop count of 1, but essential in recipes with an actual number of loops.
//                 // will act as if false if it does not exist, and will not log anything, unlike json_format.
//                 'outputisarray': true,
//                 'json_format': false,
//                 'recipedata': (post, pre, id) => event.recipes.createMixing(post, [pre]).id(id)
//             }
//         ],
//     1, 'minecraft:grass_block', 'extsequence/outputisarray_showcase', event)
// })
//*/
