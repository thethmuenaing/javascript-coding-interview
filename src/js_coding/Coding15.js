import React from "react";

const Coding15 = () => {
	const arr1 = [1, 6, 3, 8];
	const arr2 = [5, 2, 7, 4];
	// concat
	const finalArr = arr1.concat(arr2);
	console.log("merge with concat ", finalArr);
	const sorterArr = finalArr.sort(function (a, b) {
		return a - b;
	});
	console.log("sort", sorterArr);

	// spread operator
	const arr3 = [9, 14, 11, 16];
	const arr4 = [13, 10, 15, 12];
	const spreadArr = [...arr3, ...arr4];
	console.log("spread ", spreadArr);
	const sorterArr2 = spreadArr.sort(function (a, b) {
		return a - b;
	});
	console.log("sorterArr2 ", sorterArr2);
	return (
		<div>
			<h1>How to merge two array and sort them in javascript</h1>
			<p>merge = ပေါင်းစည်းပါ။</p>
			<p>sort = စီရန်</p>
			<p>
				merge with concat (arr.concat(arr2)) and spread operator(...arr,...arr2)
			</p>
		</div>
	);
};

export default Coding15;
