import Coding06 from "./js_coding/Coding06";

function App() {
	const arrNumber = [1, 2, 3, 4, 5, 6, 9, 10];
	const missArray = [];
	const missingValue = (arr) => {
		const minValue = Math.min(...arr);
		const maxValue = Math.max(...arr);

		for (let i = minValue; i < maxValue; i++) {
			if (arr.indexOf(i) < 0) {
				missArray.push(i);
			}
		}
		return missArray;
	};
	console.log("missArray", missingValue(arrNumber));
	return (
		<div className="App">
			<div className="text-center">
				<Coding06 />
			</div>
		</div>
	);
}

export default App;
