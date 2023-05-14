import React from "react";

const Coding10 = () => {
	const inputNumber = prompt("enter number");
	if (inputNumber === 1) {
		console.log(`${inputNumber} is not prime neither composite`);
	} else if (inputNumber < 1) {
		console.log(` prime number of ${inputNumber} is not possible `);
	} else {
		for (let i = 2; i < inputNumber; i++) {
			var result;
			if (inputNumber % 2 === 0) {
				result = `${inputNumber} is not prime number`;
				break;
			} else {
				result = `${inputNumber} is prime number`;
			}
		}
		console.log(result);
	}
	return (
		<div>
			<h1>Coding10</h1>
			<h1>How to find prime number in javascript</h1>
			<p>Prime numbers are those which are divided by itself or 1 </p>
		</div>
	);
};

export default Coding10;
