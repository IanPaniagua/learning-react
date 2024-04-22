import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'


function App() {
const [enabled, setenabled] = useState(false)
const [position, setPosition] = useState({x: 0, y: 0})



// [] -> Solo se ejecuta una bez cuando se monta el componente
// [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
// undefined -> se ejecuta cada vez que se reenderiza el componente

//pointer move effect
  useEffect(() => {
    console.log('efecto', {enabled}) 

    const handleMove = (event) => {
      const{ clientX, clientY} = event
      console.log('handleMove', {clientX, clientY})
      setPosition({x: clientX, y:clientY})
    }
    if (enabled){

      window.addEventListener('pointermove', handleMove)
    }
    //cleanup, para cuando el componente se desmonta o cambian las dependencias.
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

//change body classname effect
useEffect(()=> {
  document.body.classList.toggle('no-cursor', enabled)

  return() => { //cleanup method
    document.body.classList.remove('no-cursor')
  }
}, [enabled])
  return (
    <main>
    {enabled && (
    <div style={{
      position: 'absolute',
      backgroundColor: '#09f',
      borderRadius: '50%',
      opacity: 0.8,
      pointerEvents: 'none',
      left: -20,
      top: -20,
      width: 40,
      height: 40,
      transform: `translate(${position.x}px, ${position.y}px)`
    }}></div>
  )}
    <h1>Project 03</h1>
    <button onClick={()=> setenabled(!enabled)}>
      {enabled ? 'Deactivate' : 'Activate'} follow pointer
      </button>
    </main>
  )
}

export default App
