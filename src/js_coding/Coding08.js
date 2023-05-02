import React from "react";

const Coding08 = () => {
	const arrNumber = [1, 2, 3, 75, 32, 67, 66];

	const sumOfNumber = (arr) => {
		return arr.reduce((pre, cur) => {
			return pre + cur;
		});
	};

	console.log("sumOfNumber ", sumOfNumber(arrNumber));
	return (
		<div>
			<h1>How to find the sum of all elements in given array in javascript?</h1>
		</div>
	);
};

export default Coding08;
