
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
	let board = [];
	for(let i = 0; i < numberOfRows; i++){
		let row = []; 
		for(let j = 0; j < numberOfColumns; j++){
			row.push(' '); 
		}
		board.push(row); 
	}
	return board;
};

const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
	let board = [];
	for(let i = 0; i < numberOfRows; i++){
		let row = []; 
		for(let j = 0; j < numberOfColumns; j++){
			row.push(null); 
		}
		board.push(row); 
	}
	return board;

	let numberOfBombsPlaced = 0; 
 // The code in your while loop has the potential to place bombs on top of already existing bombs. 
 // This will be fixed when you learn about control flow.
	while (numberOfBombsPlaced < numberOfBombs ) {
		let randomRowIndex = Math.floor(Math.random() * numberOfRows); 
		let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
		if (board[randomRowIndex][randomColumnIndex] !== 'B') {
			board[randomRowIndex][randomColumnIndex] = 'B';
			numberOfBombsPlaced++;
		}
		board[randomRowIndex][randomColumnIndex] = 'B';
		numberOfBombsPlaced ++;
	}
}; 

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {

};

const neighborOffsets = [
	[-1, -1],
	[-1, 0],
	[-1, 1],
	[0, 1],
	[1,1],
	[0, 1],
	[1, -1],
	[1, 0],
]; 

const numberOfRows = bombBoard.length;

const numberOfColumns = bomboard[0].length; 

const numberOfBombs = 0; 

neighborOffsets.forEach(offset => {
	const neighborRowIndex = rowIndex + offset[0];
	const neighborColumnIndex = columnIndex + offset[1];
	if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows 
	&& neighborColumnIndex >= 0 && neighborColumnIndex < neighborColumnIndex) {
		if(bombBoard[neighborRowIndex[0]] == 'B'){
			numberOfBombs++; 
		};
	};
	return numberOfBombs
}); 

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) => {
	if(playerBoard[rowIndex][columnIndex] ! == ' '){
		console.log('This tile has already been flipped!')
	} else if (playerBoard[rowIndex][columnIndex] == 'B'){
		console.log(playerBoard[rowIndex][columnIndex] = 'B'); 
	} else {
		playerBoard[rowIndex][columnIndex] = getNumberOfNeighborBombs (bombBoard, rowIndex, columnIndex);
	}
};

const printBoard = board => {
	console.log(board.map(row => row.join(' | ')).join('\n'));
};


// let playerBoard = generatePlayerBoard(3, 4); 
// let bombBoard = generateBombBoard(3, 4, 5); 

// console.log('Player Board: '); 
// printBoard(playerBoard); 
// console.log('Bomb Board: '); 
// printBoard(bombBoard); 

flipTile(playerBoard, bombBoard, 0, 0)
console.log('Updated Player Board: ')
printBoard(playerBoard); 