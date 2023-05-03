import React from "react";

const Coding16 = () => {
	// program to find the factors of an integer
	const inputNumber = prompt("please enter positive number");
	console.log(`factors of ${inputNumber}`);
	const factorArr = [];
	for (let i = 0; i <= inputNumber; i++) {
		if (inputNumber % i === 0) {
			factorArr.push(i);
		}
	}
	console.log(`factors of ${inputNumber}`, factorArr);
	return (
		<div>
			<h1>How to find factor of a given integer in javascript</h1>
			<p>factor : e.g ; 12:1,2,3,4,6,12</p>
		</div>
	);
};

export default Coding16;
