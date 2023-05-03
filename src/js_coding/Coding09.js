import React from "react";

const Coding09 = () => {
	const inputNumber = prompt("Please enter number");
	let fact = 1;
	if (inputNumber < 0) {
		console.log(`factorial of ${inputNumber} is not possible`);
	} else {
		for (let i = 1; i <= inputNumber; i++) {
			fact = fact * i;
		}
		console.log(`factorial of ${inputNumber} is ${fact}`);
	}
	return (
		<div>
			<h1>How to find factorial of a given number in javascript?</h1>
			<p>
				factorial: = the product of an integer and all the integers below it;
				e.g. factorial four ( 4! ) is equal to 24.
			</p>
			<p>e.g: 1*2*3*4 = 24</p>
		</div>
	);
};

export default Coding09;
