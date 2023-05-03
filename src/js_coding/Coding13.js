import React from "react";

const Coding13 = () => {
	let inputStr = prompt("enter value");
	inputStr = inputStr.toLocaleLowerCase();
	const palindromeFind = (str) => {
		const reverseStr = str.split("").reverse().join("");
		if (reverseStr === str) {
			return true;
		} else {
			return false;
		}
	};
	console.log("palindrome", palindromeFind(inputStr));
	return (
		<div>
			<h1>How to find palindrome in javascript</h1>
			<p>
				a word, verse, or sentence(such as "madam") or a number (such as "1881")
				that reads the same backward or forward
			</p>
		</div>
	);
};

export default Coding13;
