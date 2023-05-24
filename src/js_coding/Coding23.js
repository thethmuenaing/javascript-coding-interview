import React from "react";

const Coding23 = () => {
	const inputString = prompt("Please string to capitalize");
	const firstLetercapital = (str) => {
		let newStr = str.split(" ");
		console.log(newStr);
		newStr = newStr.map((str) => {
			return str.charAt(0).toUpperCase() + str.slice(1);
		});
		return newStr.join(" ");
	};
	console.log("firstLetercapital ", firstLetercapital(inputString));
	return (
		<div>
			<h1>Coding23</h1>
			<h1>
				How to convert first letter of a string in to uppercase in javascript
			</h1>
			<p>
				<span className="text-yellow-500">charAt()</span> : to get a character
				at an index
			</p>
			<p>
				<span className="text-yellow-500">toUpperCase()</span> : to uppercase
				character
			</p>
			<p>
				<span className="text-yellow-500">map()</span> : to return a new array
			</p>
			<p>
				<span className="text-yellow-500">slice()</span> : to slice any
				character from string
			</p>
		</div>
	);
};

export default Coding23;
