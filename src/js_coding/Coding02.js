import React from "react";

const Coding02 = () => {
	const arrNumber = [1, 34, 33, 56, 7777, 765, 78, 9];
	const maxFunction = (arr) => {
		return arr.reduce(function (pre, cur) {
			return pre > cur ? pre : cur;
		});
	};
	console.log("maxNumber ", maxFunction(arrNumber));

	const arrNumber1 = [1, 2, 3, 4, 5, 6, 7, 8];
	const MinNumber = arrNumber1.reduce(function (pre, cur) {
		return pre < cur ? pre : cur;
	});
	console.log("minNumber ", MinNumber);

	return (
		<div>
			<h1>Coding02</h1>
			<h1>How to find Max and Min value in a given Array in javascript?</h1>
		</div>
	);
};

export default Coding02;
