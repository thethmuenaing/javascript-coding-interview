import React from "react";

const Coding07 = () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 11, 32, 44, 56, 54];
	const evenNumbers = numbers.filter((item) => {
		return item % 2 === 0;
	});
	console.log("even ", evenNumbers);

	const oddNumbers = numbers.filter((item) => {
		return item % 2 !== 0;
	});
	console.log("odd ", oddNumbers);
	return (
		<div>
			<h1>Coding07</h1>
			<h1>How to find odd and even numbers in array in javascript</h1>
		</div>
	);
};

export default Coding07;
