
import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'

import {Square} from './components/square.jsx'
import { TURNS } from './constants.js'

import { checkWinner } from './logic/board.js'



function App() {



const [board, setBoard] = useState(Array(9).fill(null))
console.log(board)


const [turn, setTurn] = useState(TURNS.X)

//null es que no hay ganador, false es que hay empate
const [winner,setWinner] = useState(null)



const resetGame = () => {
  setBoard(Array(9).fill(null))
  setTurn(TURNS.X)
  setWinner(null)
}

const checkEndGame = (newBoard)=> {
  return newBoard.every((square) => square !== null)
}


const updateBoard = (index)=> {
  //si ya ha sido seleccionada no hacer nada
  if(board[index] || winner) return
  //para hacer una copia del array [...board]. Aprende Spread and Rest Operator JS. (siempre hay que pasar un array o objeto nuevo, para evitar problemas de reenderizado)
  const newBoard = [...board]
  newBoard[index] = turn
  setBoard(newBoard)
  const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
  setTurn(newTurn)
  //revisar si hay ganador
  const newWinner = checkWinner(newBoard)
  if (newWinner) {
    confetti()
    setWinner(newWinner)
  }else if (checkEndGame(newBoard)) {
    setWinner(false) //empate
  }
}



  return(
    <main className='board'>
     <h1>Tic Tac Toe</h1>
     <button onClick={resetGame}>Reset del Juego</button>
    <section className="game">
      {
        board.map((square, index) => {
          return (
            <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {square}
            </Square>
          )
        })
      }
    </section>

    <section className="turn">
      <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
      </Square>

      <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
      </Square>
    </section>

    {
      winner !== null && (
        <section className='winner'>
          <div className = "text">
            <h2>
              {
                winner === false
                ? 'Empate'
                : 'Ganó: '
              }
            </h2>
            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>

            <footer>
              <button onClick={resetGame}>Empezar de nuevo</button>
            </footer>
            </div>
        </section>
      )
    }
    </main>
    )
}

export default App

