// ENTER TWO MATRIXs
const inputA = document.getElementById("input-a");
const inputB = document.getElementById("input-b");
const btn = document.getElementById("btn");
btn.addEventListener("click", calcMatrix);

let A, B, res;

let Aj, // Matrix A columns
	Ai, // Matrix A rows
	Bj, // Matrix B columns
	Bi; // Matrix B rows
function calcMatrix() {
	// get matrix(text) and convert them to array
	A = inputA.value
		.trim()
		.split("\n")
		.map((t) => t.split(" "));
	B = inputB.value
		.trim()
		.split("\n")
		.map((t) => t.split(" "));
	// set columns and row
	Aj = A.length;
	Bj = B.length;
	Ai = A[0].length;
	Bi = B[0].length;
	// solve multiply
	multiply(Aj, Ai, A, Bj, Bi, B);

	// draw it
	drawA();
	drawB();
    DrawResult();
}

function multiply(Aj, Ai, A, Bj, Bi, B) {
	// temp variables
	let x, i, j;

	res = new Array(Aj);
	for (i = 0; i < Aj; i++) res[i] = new Array(Bi);

	for (i = 0; i < Aj; i++) {
		for (j = 0; j < Bi; j++) {
			res[i][j] = 0;
			for (x = 0; x < Ai; x++) {
				res[i][j] += A[i][x] * B[x][j];
			}
		}
	}
}

function DrawResult() {
	const ans = document.querySelector(".ans");
    ans.innerHTML = ""
	// Draw matrix on screen
	for (i = 0; i < Aj; i++) {
		for (j = 0; j < Bi; j++) {
			ans.innerHTML += res[i][j] + " ";
		}
		ans.innerHTML += "<br>";
	}
}

function drawA() {
	const matrixA = document.querySelector(".m-a");
    matrixA.innerHTML = ""
	// Draw matrix on screen
	for (i = 0; i < Aj; i++) {
		for (j = 0; j < Ai; j++) {
			matrixA.innerHTML += A[i][j] + " ";
		}
		matrixA.innerHTML += "<br>";
	}
}

function drawB() {
	const matrixB = document.querySelector(".m-b");
    matrixB.innerHTML = ""

	// Draw matrix on screen
	for (i = 0; i < Bj; i++) {
		for (j = 0; j < Bi; j++) {
			matrixB.innerHTML += B[i][j] + " ";
		}
		matrixB.innerHTML += "<br>";
	}
}
