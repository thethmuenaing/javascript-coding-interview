import React from "react";

const Coding26 = () => {
	let string = prompt("Please enter string");
	let letter = prompt("please enter letter");
	let strLen = string.length;
	let counter = 0;
	for (let i = 0; i < strLen; i++) {
		if (string[i] === letter) {
			counter++;
		}
	}
	console.log(`in ${string} occurrence of ${letter} = ${counter}`);
	return (
		<div>
			<h1>Coding26</h1>
			<h1>
				How to Check the Number of Occurrence of a Character in a String in
				Javascript
			</h1>
		</div>
	);
};

export default Coding26;
