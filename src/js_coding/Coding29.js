import React from "react";

const Coding29 = () => {
	const arrNum = [1, 2, 3, 4, 5, 6];
	const mapMethod = arrNum.map((res) => {
		return res + 3;
	});
	const foreachMethod = arrNum.forEach((res, i) => {
		arrNum[i] = res + 7;
	});

	console.log(mapMethod, foreachMethod);
	console.log(mapMethod, arrNum);
	return (
		<div>
			<h1>Coding29</h1>
			<h1>JS Output Interview Questions </h1>
		</div>
	);
};

export default Coding29;
