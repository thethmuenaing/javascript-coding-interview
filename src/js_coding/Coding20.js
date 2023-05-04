import React from "react";

const Coding20 = () => {
	const num1 = [1, 2, 4, 6, 8, 9, 11];
	const num2 = [2, 4, 6, 8, 10, 22, 1];

	const unionNumbers = [...num1, ...num2];
	console.log([...new Set(unionNumbers)]);
	return (
		<div>
			<h1>How to find union of two arrays / Set in javascript</h1>
		</div>
	);
};

export default Coding20;
