import React from "react";

const Coding01 = () => {
	const arrNumbers = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
	const duplicateNumbers = arrNumbers.filter(
		(ele, index, arr) => arr.indexOf(ele) !== index
	);
	console.log("duplicateNumbers", duplicateNumbers);

	const arr = [1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
	const dupli = arr.filter((ele, index, arr) => console.log(ele, index, arr));

	return (
		<div>
			<h1>How To find duplicate elements in array in javascript</h1>
			<p>duplicate = ထပ်နေသော</p>
		</div>
	);
};

export default Coding01;