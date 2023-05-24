import React from "react";

const Coding30 = () => {
	// const number = [1, 4, 6, 7, 8, 9, 21, 22, 32, 2, 4, 12, 15, 3, 11, 5];
	// const copyNumber = [...number];
	// const sortNumber = [];
	// for (let i = 0; i < number.length; i++) {
	// 	console.log("number.length ", number.length);
	// 	const minNumber = Math.min(...copyNumber);
	// 	const index = copyNumber.indexOf(minNumber);
	// 	// console.log("index ", index);
	// 	copyNumber.splice(index, 1);
	// 	// console.log("number ", number);
	// 	sortNumber.push(minNumber);
	// 	console.log("sortNumber ", sortNumber);
	// }
	const number = [1, 4, 6, 7, 8, 9, 21, 22, 32, 2, 4, 12, 15, 3, 11, 5];
	for (let i = 0; i < number.length; i++) {
		for (let x = i + 1; x < number.length; x++) {
			// console.log("number i ", number[i]);
			// console.log("number x ", number[x]);

			// large to small
			if (number[i] < number[x]) {
				let temp = number[i];
				number[i] = number[x];
				number[x] = temp;
			}
			// // small to large
			// if (number[i] > number[x]) {
			// 	let temp = number[i];
			// 	number[i] = number[x];
			// 	number[x] = temp;
			// }
		}
	}
	// const sortNumber = number.sort((a, b) => b - a);

	console.log("sortNumber ", number);

	const students = [
		{ name: "Thet", grade: 15 },
		{ name: "Hmue", grade: 15 },
		{ name: "Naing", grade: 13 },
		{ name: "Htet", grade: 14 },
	];

	const sortName = students.sort((a, b) => a.name.localeCompare(b.name));
	console.log("sortName ", sortName);
	return (
		<div>
			<h1>Coding30</h1>
			<h1>Sorting with ownSelf</h1>
		</div>
	);
};

export default Coding30;
