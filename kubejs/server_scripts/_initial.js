// priority: 9999
//! This script loads first before the other startup scripts
// put your util or patches here so that you can access them at other scripts

// see quest_scripts.js
const cake_reset_time = 60; // in seconds

/**
 * helper for compressing/decompress crafting
 * @param {Internal.RecipesEventJS_} ev
 * @param {OutputItem_} output output
 * @param {InputItem_} input input
 * @param {boolean} make_uncompacting make uncompacting recipie (default true)
 * @returns {Internal.RecipeTypeFunction}
 */
const comapcting = (ev, output, input, make_uncompacting) => {
	// kubejs doesnt support nullish coalescing :(
	if (make_uncompacting === undefined || make_uncompacting === null) {
		make_uncompacting = true;
	}

	if (make_uncompacting) ev.shapeless(`9x ${input}`, [output]);

	return ev.shaped(output, [
		'aaa',
		'aaa',
		'aaa'
	], { a: input });
}

/**
 * shrimple helper for alloy smelter recipies
 * @param {Internal.RecipesEventJS_} ev
 * @param {InputItem_} inputA
 * @param {InputItem_} inputB
 * @param {OutputItem_} output
 * @param {number} time in seconds
 * @param {number} voltage
 */
const alloySmelter = (ev, inputA, inputB, output, time, voltage) => {
	ev.recipes.gtceu.alloy_smelter(`nomi:generated_${Item.of(output).idLocation.path}_${Item.of(inputA).idLocation.path}_${Item.of(inputB).idLocation.path}`)
		.itemInputs(inputA, inputB)
		.itemOutputs(output)
		.duration(time * 20)
		.EUt(voltage)
}