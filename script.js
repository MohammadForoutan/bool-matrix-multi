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
		.map((t) => t.trim().split(" "));
	B = inputB.value
		.trim()
		.split("\n")
		.map((t) => t.trim().split(" "));
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
				let val = A[i][x] * B[x][j];
				if (val > 1) {
					val = 1;
				}
				res[i][j] += val;
			}
		}
	}
}

function DrawResult() {
	const con = document.querySelector(".container")
    con.style.opacity = '1'
	const ans = document.querySelector(".ans");
	ans.innerHTML = "";
	// Draw matrix on screen

	console.log({ res });
	for (i = 0; i < Aj; i++) {
		for (j = 0; j < Bi; j++) {
			let tmp;
			if (res[i][j] > 1) {
				tmp = 1;
			} else { tmp = res[i][j]}
			ans.innerHTML += tmp + " ";
		}
		ans.innerHTML += "<br>";
	}
}

function drawA() {
	const matrixA = document.querySelector(".m-a");
	matrixA.innerHTML = "";
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
	matrixB.innerHTML = "";

	// Draw matrix on screen
	for (i = 0; i < Bj; i++) {
		for (j = 0; j < Bi; j++) {
			matrixB.innerHTML += B[i][j] + " ";
		}
		matrixB.innerHTML += "<br>";
	}
}
