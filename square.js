/*
			You can pass numbers as node environment arguments, which form an array.
			Note, that arguments, wich fall into the app begins from 2-index,
			because first is a node variable and second is an execution file.
			This array of numbers fall into S-function as its single argument.
			If you are lazy like me and just want to test how does it work, you can
			skip this step and don't pass arguments.
			S-function will be called with default value.
			All you need to just tap in the bash thomething like :

						C:\your_current_location> node square.js 
								or with arguments (optional)
							C:\your_current_location> node square.js 1 2 3 4 5 6
*/




function S(mathExpect) {

	let firstStep = mathExpect.map((index) => index*index);
	let secondStep = firstStep.reduce((a, b) => a + b) / mathExpect.length;
	return +Math.sqrt(secondStep).toFixed(2);

}

let defaultVal = [1, 2, 3 , 4, 5];

let arg = process.argv.slice(2).length > 0 ? process.argv.slice(2) : defaultVal;

console.log(S(arg))