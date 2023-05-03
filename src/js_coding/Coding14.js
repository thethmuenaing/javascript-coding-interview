import React from "react";

const Coding14 = () => {
	let a = 8;
	let b = 3;
	// with using third variable
	let third = a;
	a = b;
	b = third;
	console.log(`value of a is ${a} and value of b is ${b}`);

	// without using third variable
	let c = 22;
	let d = 33;
	[c, d] = [d, c];
	console.log(`value of c is ${c} and value of d is ${d}`);
	return (
		<div>
			<h1>
				How to swap two variables without using the third variable in javascript
			</h1>
			<p>swap = လဲလှယ်ပါ</p>
		</div>
	);
};

export default Coding14;
