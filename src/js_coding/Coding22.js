import React from "react";

const Coding22 = () => {
	const inputValue = prompt("Enter Value to convert km to m");
	const factor = 0.621371;
	const kmToMile = inputValue * factor;
	console.log(`${inputValue}km = ${kmToMile}m`);

	const factor2 = 1.60934;
	const mileToKilometer = inputValue * factor2;
	console.log(`${inputValue}m = ${mileToKilometer}km`);
	return (
		<div>
			<h1>Coding22</h1>
			<h1>how to convert kilometers(km) into miles(m) in Javascript</h1>
			<p>1 kilometer = 0.621371 mile</p>
			<p>1 mile = 1.60934 kilometer</p>
		</div>
	);
};

export default Coding22;
