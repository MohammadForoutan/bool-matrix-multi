const inputA = document.getElementById('input-a');
const inputB = document.getElementById('input-b');
const btn = document.getElementById('btn');
const container = document.querySelector('.container');
const info = document.querySelector('.info');
btn.addEventListener('click', doMultiply);

function extractMatrixFromRawText(matrixRaw) {
	return matrixRaw.value
		.trim()
		.split('\n') // extract rows
		.map((row) => row.trim().split(' ')); // extracts columns
}

function matrixMultiply(matA, matB) {
	const numRowsA = matA.length;
	const numColsA = matA[0].length;
	const numRowsB = matB.length;
	const numColsB = matB[0].length;

	// check compatibility
	if (numColsA !== numRowsB) {
		console.error('Error: incompatible matrix dimensions');
		throw new Error();
	}

	for (let i = 0; i < numRowsA; i++) {
		if (matA[i].length !== numColsA) {
			info.innerHTML = `Error: row ${++i} in matrix A has an invalid number of columns`;
			throw new Error();
		}
	}

	for (let i = 0; i < numRowsB; i++) {
		if (matB[i].length !== numColsB) {
			info.innerHTML = `Error: row ${++i} in matrix B has an invalid number of columns`;
			throw new Error();
		}
	}

	// Create a new matrix to store the result
	const result = [];

	for (let i = 0; i < numRowsA; i++) {
		const row = [];

		for (let j = 0; j < numColsB; j++) {
			let sum = 0;

			for (let k = 0; k < numColsA; k++) {
				// Multiply corresponding elements and accumulate the sum
				sum += matA[i][k] * matB[k][j];
			}

			// Add the sum to the current row
			row.push(sum);
		}

		// Add the completed row to the result matrix
		result.push(row);
	}

	return result;
}

function drawMatrix(matrix, domClass) {
	const matrixDom = document.querySelector(`.${domClass}`);
	matrixDom.innerHTML = '';
	// Draw matrix on screen
	for (i = 0; i < matrix.length; i++) {
		for (j = 0; j < matrix[0].length; j++) {
			matrixDom.innerHTML += matrix[i][j] + ' ';
		}
		matrixDom.innerHTML += '<br>';
	}
}

function doMultiply() {
	const matrixA = extractMatrixFromRawText(inputA);
	const matrixB = extractMatrixFromRawText(inputB);

	const matrixAns = matrixMultiply(matrixA, matrixB);

	drawMatrix(matrixA, 'matrix-a');
	drawMatrix(matrixB, 'matrix-b');
	drawMatrix(matrixAns, 'matrix-ans');
}
