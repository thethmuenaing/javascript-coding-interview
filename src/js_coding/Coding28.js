import React from "react";

const Coding28 = () => {
	let number = prompt("Please enter number");
	let temp = number;

	let lengthOfDigit = number.toString().length;
	// console.log("lengthOfDigit ", lengthOfDigit);
	let sum = 0;
	while (temp > 0) {
		const digit = temp % 10;
		// console.log("digit", digit);

		sum += digit ** lengthOfDigit;
		// console.log("sum ", sum);
		temp = parseInt(temp / 10);
		// console.log("temp ", temp);
	}
	if (sum == number) {
		console.log(`${number} = ${sum} is an Armstrong number`);
	} else {
		console.log(`${number} = ${sum} is not Armstrong number`);
	}
	return (
		<div>
			<h1>Program to Check Armstrong Number in JavaScript</h1>

			<div>
				<h1>What is Armstrong Number</h1>
				<p>abcd... = an + bn + cn + dn + ...</p>
				<div>
					<p>
						In the case of an armstrong number of 3 digits the sum of cubes of
					</p>
					<p>
						each digit is equal to the number itself. For example , 371 is an
						Armstrong number because;
					</p>
				</div>
				<p>371 = 3x3x3 + 7x7x7 + 1x1x1</p>
				<p>371 = 27 + 343 + 1</p>
			</div>
		</div>
	);
};

export default Coding28;
