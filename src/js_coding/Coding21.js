import React from "react";

const Coding21 = () => {
	// celsius to fahrenheit
	const inputNumber = prompt("please enter value to convert");
	const calToFahren = inputNumber * 1.8 + 32;
	console.log(`Celsius to Fahrenheit : ${inputNumber}°C = ${calToFahren}°F`);
	const fahrenToCal = (5 / 9) * (inputNumber - 32);
	console.log(`Fahrenheit to Celsius : ${inputNumber}°F = ${fahrenToCal}°C`);
	return (
		<div>
			<h1>
				how to convert celsius to fahrenheit or fahrenheit to celsius in
				javascript
			</h1>

			<p>vice versa = အပြန်အလှန်</p>

			<h2>Formula --- (32°F - 32) x 5/9 = 0°C</h2>
			<div>
				<h1 className="text-2xl">celsius to fahrenheit formula</h1>
				<p>fahrenheit = celsius * 1.8 +32</p>
			</div>
			<div>
				<h1 className="text-2xl">fahrenheit to celsius formula</h1>
				<p> celsius = 5/9 * (fahrenheit - 32)</p>
			</div>
		</div>
	);
};

export default Coding21;
