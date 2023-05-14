import React from "react";

const Coding27 = () => {
	const table = (number) => {
		for (let i = 1; i <= 10; i++) {
			let res = i * number;
			console.log(`${number} x ${i} = ${res}`);
		}
	};
	table(12);
	return (
		<div>
			<h1>Coding27</h1>
			<h1>
				how to print the table of any user defined number using function in
				javascript?
			</h1>
		</div>
	);
};

export default Coding27;
