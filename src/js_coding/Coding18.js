import React from "react";

const Coding18 = () => {
	let arr1 = [1, 2, 3, 4, 5, 6];
	let arr2 = [6, 5, 4, 3, 2, 1];

	const isArrSame =
		arr1.length === arr2.length &&
		arr1.every((curEle) => {
			if (arr2.indexOf(curEle) > -1) {
				return (curEle = [arr2.indexOf(curEle)]);
			}
		});
	console.log("compare two array ", isArrSame);
	return (
		<div>
			<h1>How to compare two arrays are Equal or Not in javascript</h1>
			<p>indexOf method return -1 if element is not exist in array</p>
			<p>
				every method check each and every element fullfil the condition exist in
				array
			</p>
		</div>
	);
};

export default Coding18;
