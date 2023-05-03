import React from "react";

const Coding17 = () => {
	const operator = prompt("Please select operator either + - * /");
	const num1 = parseFloat(prompt("enter num 1"));
	const num2 = parseFloat(prompt("enter num 2"));

	let result;
	if (operator === "+") {
		result = num1 + num2;
	} else if (operator === "-") {
		result = num1 - num2;
	} else if (operator === "*") {
		result = num1 * num2;
	} else {
		result = num1 / num2;
	}
	console.log(`${num1} ${operator} ${num2} = ${result}`);
	return (
		<div>
			<h1>How to make calculator in javascript</h1>
		</div>
	);
};

export default Coding17;
