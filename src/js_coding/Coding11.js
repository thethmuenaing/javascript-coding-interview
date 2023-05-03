import React from "react";

const Coding11 = () => {
	// let string = prompt("enter one letter");
	// if (
	// 	string.toLowerCase() === "a" ||
	// 	string.toLowerCase() === "e" ||
	// 	string.toLowerCase() === "i" ||
	// 	string.toLowerCase() === "o" ||
	// 	string.toLowerCase() === "u"
	// ) {
	// 	console.log(`${string} is vowel`);
	// } else {
	// 	console.log(`${string} is not vowel`);
	// }

	// second method of find numbers of vowels
	const string = prompt("enter letter");
	const vowels = ["a", "e", "i", "o", "u"];

	const countVowels = (str) => {
		let count = 0;
		for (let letter of str) {
			if (vowels.includes(letter.toLowerCase())) {
				count++;
			}
		}
		return count;
	};

	console.log(countVowels(string));

	return (
		<div>
			<h1>How to find vowels from string in javascript?</h1>
			<p> vowels = သရများ</p>
		</div>
	);
};

export default Coding11;
