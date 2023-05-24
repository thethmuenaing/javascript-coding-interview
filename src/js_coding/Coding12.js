import React from "react";

const Coding12 = () => {
	const reverseString = (str) => {
		const strToArr = str.split("");
		console.log("strToArr ", strToArr);
		const arrReverse = strToArr.reverse();
		console.log("arrReverse ", arrReverse);
		const arrToStr = arrReverse.join("");
		return arrToStr;
	};
	console.log("reverseString.. ", reverseString("reverse"));
	return (
		<div>
			<h1>Coding12</h1>
			<h1>How to reverse a string in javascript</h1>
			<p>reverse = ပြောင်းပြန်</p>
		</div>
	);
};

export default Coding12;
