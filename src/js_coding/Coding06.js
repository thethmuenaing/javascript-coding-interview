import React from "react";

const Coding06 = () => {
	const arrNumber = [1, 2, 3, 4, 5, 6, 9, 10];
	const missArray = [];
	const missingValue = (arr) => {
		const minValue = Math.min(...arr);
		const maxValue = Math.max(...arr);

		for (let i = minValue; i < maxValue; i++) {
			if (arr.indexOf(i) < 0) {
				missArray.push(i);
			}
		}
		return missArray;
	};
	console.log("missArray", missingValue(arrNumber));
	return (
		<div>
			<h1>
				How to find the missing number in a given integer array of 1 to 10
			</h1>
		</div>
	);
};

export default Coding06;
