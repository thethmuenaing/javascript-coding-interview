import React from "react";

const Coding25 = () => {
	// Right Triangle = ညာဘက်တြိဂံ
	for (let i = 1; i <= 6; i++) {
		for (let j = 1; j <= i; j++) {
			document.write("* &nbsp;&nbsp;");
		}
		document.write("<br>");
	}
	// Pyramid
	for (let i = 1; i <= 6; i++) {
		for (let k = 1; k <= 6 - i; k++) {
			document.write("&nbsp;&nbsp;");
		}
		for (let j = 1; j <= i; j++) {
			document.write("* &nbsp;&nbsp;");
		}
		document.write("<br>");
	}

	// Diamond shape
	for (let i = 1; i <= 6; i++) {
		for (let k = 1; k <= 6 - i; k++) {
			document.write("&nbsp;&nbsp;");
		}
		for (let j = 1; j <= i; j++) {
			document.write(i + "&nbsp;&nbsp;");
		}
		document.write("<br>");
	}
	for (let i = 1; i <= 6; i++) {
		for (let k = 1; k <= i; k++) {
			document.write("&nbsp;&nbsp;");
		}
		for (let j = 1; j <= 6 - i; j++) {
			document.write(i + "&nbsp;&nbsp;");
		}
		document.write("<br>");
	}
	return (
		<div>
			<h1>Coding25</h1>
			<h1>
				How to print star and number patterns Right Triangle, Pyramid and
				Diamond shape in javascript?
			</h1>
			<p>Right Triangle = ညာဘက်တြိဂံ</p>
			<p>Pyramid = ပိရမစ်</p>
			<p>Diamond shape = စိန်ပုံသဏ္ဍာန်</p>
		</div>
	);
};

export default Coding25;
