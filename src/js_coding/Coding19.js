import React from "react";

const Coding19 = () => {
	const arr1 = [1, 3, 6, 8, 4, 9, 9, 9, 9];
	const arr2 = [9, 7, 4, 3, 2, 2, 6, 7];

	const intersectionArr = arr1.filter((curEle) => {
		return arr2.includes(curEle);
	});
	// console.log(intersectionArr);

	console.log([...new Set(intersectionArr)]);
	return (
		<div>
			<h1>How to find intersection of two arrays in javascript</h1>
		</div>
	);
};

export default Coding19;
