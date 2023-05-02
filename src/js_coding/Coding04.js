import React from "react";

const Coding04 = () => {
	const initArray = [1, 5, 7, 8, 4, 9];
	const largestValue = (arr) => {
		const firstLargestValue = Math.max(...arr);
		return firstLargestValue;
	};
	console.log("largestValue ", largestValue(initArray));

	const secondLargestValue = (arr) => {
		const firstLargestValue = Math.max(...arr);
		const index = arr.indexOf(firstLargestValue);
		arr.splice(index, 1);
		const secondLargestValue = Math.max(...arr);
		return secondLargestValue;
	};
	console.log("secondLargestValue ", secondLargestValue(initArray));

	return (
		<div>
			<h1>
				How to find Second Largest value, and remove First Largest value in
				array?
			</h1>
		</div>
	);
};

export default Coding04;
