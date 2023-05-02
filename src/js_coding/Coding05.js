import React from "react";

const Coding05 = () => {
	const empArr = [
		{ name: "king", age: 42 },
		{ name: "ali", age: 32 },
		{ name: "ahmad", age: 22 },
		{ name: "zain", age: 62 },
		{ name: "ayesha", age: 52 },
		{ name: "hafsa", age: 28 },
		{ name: "sadi", age: 27 },
		{ name: "rohma", age: 26 },
		{ name: "masooma", age: 25 },
	];

	const filterItems = empArr.filter((item) => {
		return item.age > 30;
	});
	console.log("filter ", filterItems);

	const findItems = empArr.find((item) => {
		return item.age > 30;
	});
	console.log("find ", findItems);
	return (
		<div>
			<h1>
				What is difference Between Filter() and find() Method in javascript
			</h1>
			<p>** find() method returns the first value</p>
		</div>
	);
};

export default Coding05;
