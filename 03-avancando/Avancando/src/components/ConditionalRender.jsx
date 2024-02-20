import {useState} from 'react'
const ConditionalRender = () => {
    const [x] = useState(true)
    const [name] = useState('Matheus')
  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {name === 'João' ? <p>Olá, João!</p> : <p>Olá, estranho!</p>}
    </div>
  )
}

export default ConditionalRender