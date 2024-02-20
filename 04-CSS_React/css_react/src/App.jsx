import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'
function App() {
  const [count, setCount] = useState(0)
  const n = 15
  const [name] = useState("Victor")
  const redTitle = true

  return (
    <>
      {/*CSS global*/}
      <h1>React com CSS</h1>
      {/*CSS de componente*/}
      <MyComponent/>
      <p>Este paragráfo é do componente</p>
      {/*Inline de CSS*/}
      <p style={{color: "red", fontSize: "20px", border: "2px solid red"}}>Este paragráfo é do componente</p>
      {/*CSS inline dinâmico*/}
      <h2 style={n < 10 ? ({color: "purple"}) : ({color: "pink"}) }>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({color: "purple"}) : ({color: "pink"}) }>CSS dinâmico</h2>
      <h2 style = {name === "Victor" ? ({color: "yellow", backgroundColor: "green"}):({color: "black"})}>Nome</h2>
      {/*Classe dinâmica*/}
      <h2 className={redTitle ? "red-title" : "title"}>Este titulo vai ter classe dinâmica</h2>
      {/*CSS Modules*/}
      <Title/>
    </>
  )
}

export default App
