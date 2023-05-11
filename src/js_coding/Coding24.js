import React from "react";

const Coding24 = () => {
	let a = 0;
	let b = 1;

	for (let i = 0; i <= 18; i++) {
		let team = a + b;

		a = b;
		b = team;
		console.log(team);
	}
	return (
		<div>
			<h1>how to find fibonacci sequence in javascript</h1>
			<p>fibonacci = ဖီဘိုနာချီ</p>
			<p>
				The fibonacci sequence is the integer sequence where the first two terms
				are 0 and 1. After that the next term is defined as the sum of the
				previous two terms 0,,1,2,3,4
			</p>
			<p>terms = အသုံးအနှုန်းများ</p>
		</div>
	);
};

export default Coding24;
