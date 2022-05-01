// ENTER TWO MATRIXs
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const btn = document.getElementById("btn");
const con = document.querySelector(".container");
btn.addEventListener("click", calcMatrix);

let A, B, res, isValidate;
let Aj, // Matrix A columns
	Ai, // Matrix A rows
	Bj, // Matrix B columns
	Bi; // Matrix B rows

function multiply(Aj, Ai, A, Bj, Bi, B) {
	res = new Array(Ai);
	for (let i = 0; i < Ai; i++) res[i] = new Array(Bj);

	console.log({ res, Aj, Ai, A, Bj, Bi, B});

	for (i = 0; i < Ai; i++) {
		for (j = 0; j < Bj; j++) {
			res[i][j] = 0;
			for (x = 0; x < Aj; x++) {
				val = A[i][x] * B[x][j];
				res[i][j] += val;
			}
		}
	}
}

function DrawResult() {
	con.style.opacity = "1";
	const ans = document.querySelector(".ans");
	ans.innerHTML = "";
	// Draw matrix on screen

	for (i = 0; i < Ai; i++) {
		for (j = 0; j < Bj; j++) {
			let tmp;
			if (res[i][j] > 1) {
				tmp = 1;
			} else {
				tmp = res[i][j];
			}
			ans.innerHTML += tmp + " ";
		}
		ans.innerHTML += "<br>";
	}
}

function drawA() {
	const matrixA = document.querySelector(".m-a");
	matrixA.innerHTML = "";
	// Draw matrix on screen
	for (i = 0; i < Ai; i++) {
		for (j = 0; j < Aj; j++) {
			matrixA.innerHTML += A[i][j] + " ";
		}
		matrixA.innerHTML += "<br>";
	}
}

function drawB() {
	const matrixB = document.querySelector(".m-b");
	matrixB.innerHTML = "";

	// Draw matrix on screen
	for (i = 0; i < Bi; i++) {
		for (j = 0; j < Bj; j++) {
			matrixB.innerHTML += B[i][j] + " ";
		}
		matrixB.innerHTML += "<br>";
	}
}

function calcMatrix() {
	con.style.opacity = "0";
	// get matrix(text) and convert them to array
	A = inputA.value
		.trim()
		.split("\n")
		.map((t) => t.trim().split(" "));
	B = inputB.value
		.trim()
		.split("\n")
		.map((t) => t.trim().split(" "));
	console.log({ A, B });
	// set columns and row
	Aj = A[0].length;
	Ai = A.length;
	Bj = B[0].length;
	Bi = B.length;
	// validate matrix
	if(Aj === Bi) {
		isValidate = true;
	} else {
		isValidate = false;
	}
	console.log({ isValidate });

	// solve multiply
	multiply(Aj, Ai, A, Bj, Bi, B);

	// draw it
	drawA();
	drawB();
	setTimeout(() => {
		DrawResult();
	}, 300);
}
