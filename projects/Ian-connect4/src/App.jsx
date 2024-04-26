import React, { useState } from 'react';
import './App.css';

const numRows = 6;
const numCols = 7;

const App = () => {
  const [board, setBoard] = useState(Array.from({ length: numRows }, () => Array(numCols).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('red');
  const [winner, setWinner] = useState(null);

  const handleColumnClick = (colIndex) => {
    if (winner) return; // Ignore clicks if there's a winner
    const newBoard = [...board];
    for (let row = numRows - 1; row >= 0; row--) {
      if (!newBoard[row][colIndex]) {
        newBoard[row][colIndex] = currentPlayer;
        break;
      }
    }
    setBoard(newBoard);
    checkWinner(newBoard);
    setCurrentPlayer(currentPlayer === 'red' ? 'yellow' : 'red');
  };

  const checkWinner = (board) => {
    // Check for horizontal wins
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col <= numCols - 4; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row][col + 1] &&
          board[row][col] === board[row][col + 2] &&
          board[row][col] === board[row][col + 3]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }

    // Check for vertical wins
    for (let col = 0; col < numCols; col++) {
      for (let row = 0; row <= numRows - 4; row++) {
        if (
          board[row][col] &&
          board[row][col] === board[row + 1][col] &&
          board[row][col] === board[row + 2][col] &&
          board[row][col] === board[row + 3][col]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }

    // Check for diagonal wins (ascending)
    for (let row = 3; row < numRows; row++) {
      for (let col = 0; col <= numCols - 4; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row - 1][col + 1] &&
          board[row][col] === board[row - 2][col + 2] &&
          board[row][col] === board[row - 3][col + 3]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }

    // Check for diagonal wins (descending)
    for (let row = 0; row <= numRows - 4; row++) {
      for (let col = 0; col <= numCols - 4; col++) {
        if (
          board[row][col] &&
          board[row][col] === board[row + 1][col + 1] &&
          board[row][col] === board[row + 2][col + 2] &&
          board[row][col] === board[row + 3][col + 3]
        ) {
          setWinner(board[row][col]);
          return;
        }
      }
    }
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div key={rowIndex} className="row">
        {row.map((cell, colIndex) => (
          <div key={colIndex} className="cell" onClick={() => handleColumnClick(colIndex)}>
            <div className={cell ? `piece ${cell}` : 'empty'} />
          </div>
        ))}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Connect 4</h1>
      <div className="board">{renderBoard()}</div>
      {winner && <div>{`${winner.toUpperCase()} wins!`}</div>}
    </div>
  );
};

export default App;
