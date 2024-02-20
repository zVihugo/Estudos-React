// Components
import FirstComponent from './components/FirtsComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import Challenge from './components/Challenge'


import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos do react</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <Events/>
      <Challenge/>
    </>
  )
}

export default App
