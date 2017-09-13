class Game {
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs);
	}

	function playMove(rowIndex, columnIndex){
		this._board.flipTile(rowIndex, columnIndex)

		if(this._board.playerBoard[rowIndex][columnIndex] === 'B') {
			console.log('Game Over!');
			this._board.print();
		} else if(this._board.playerBoard[rowIndex][columnIndex] === ' '){
			console.log('Congrats! You won. :) ')
		} else {
			console.log('Current Board: ')
			this._board.print();
		}
	}
}

class Board {
	constructor(numberOfRows, numberOfColumns, numberOfBombs){
		this._numberOfBombs = numberOfBombs; 
		this._numberOfTiles = (numberOfRows * numberOfColumns);
		this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
		this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
		this.getNumberOfNeighborBombs = getNumberOfNeighborBombs;
		this._playerBoard = playerBoard; 
		this._print = print; 

		// get playerBoard() {
		// 	return this._playerBoard
		// }

		this._flipTile = (rowIndex, columnIndex) => {
		if(playerBoard[rowIndex][columnIndex] != ' '){
			console.log('This tile has already been flipped!')
			return
		} else if (playerBoard[rowIndex][columnIndex] == 'B'){
			console.log(playerBoard[rowIndex][columnIndex] = 'B'); 
		} else {
			playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs (rowIndex, columnIndex);
		  this._numberOfTiles--; 
		}

		function getNumberOfNeighborBombs(rowIndex, columnIndex) {
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

			const numberOfColumns = bombBoard[0].length; 

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

			function hasSafeTiles(numberOfTiles, numberOfBombs) {
			if (this._numberOfTiles !== this._numberOfBombs){
				return console.log("You've won!");
				}
			}

		function print (){
			console.log(board.map(row => row.join(' | ')).join('\n'));
		};

		static generatePlayerBoard (numberOfRows, numberOfColumns) {
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

		static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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

	}
};


	}
}


const g = new Game (3, 3, 3); 

g.playMove(3, 4)