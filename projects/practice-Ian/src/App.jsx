import { Children, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//the important here is the content of the span

const OurSpan = ({ text }) => {
  return (
    <span>{text}</span>
  );
};

function App() {
  const TURNS = {
    x: 'x',
    o: 'o'
  };

  const [turn, setTurn] = useState(TURNS.x);
  const [text, setText] = useState('X');

  const handleClick = () => {
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x;
    const newText = newTurn === TURNS.x ? 'X' : 'O';
    setTurn(newTurn);
    setText(newText);
  };

  return (
    <>
      <h1>Practice useState() HOOK</h1>
      <div>The actual Turn is for: 
        <OurSpan text={text} />
      </div>
      <button onClick={handleClick}>Change turn</button>
    </>
  );
}
export default App
