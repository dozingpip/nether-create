/*
 * This file is used to register world presets. Topography searches for all scripts ending with Presets.js and executes them.
 */

//Registers world presets
registerPreset("void", "Void Nether", "images/spawn", "Nether as void dimension with starting structure")//Registers preset
.registerDimension("the_nether", "dimensions/nether")//Registers script "nether_void" to be used for generating dimension "nether"
.registerEventHandler("BiomeLoadingEvent", Java.extend(Consumer, {//Registers a Forge event handler of type "BiomeLoadingEvent" 
	accept: function(event) {
		FeatureHelper.clearFeatures(event);//Clears all feature generators
		FeatureHelper.clearStructures(event);//Clears all structure generators
	}
}).class);
