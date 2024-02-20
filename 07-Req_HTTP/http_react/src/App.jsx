import { useState, useEffect } from 'react'
import './App.css'

//custom hook
import { useFetch } from './hooks/useFetch'
function App() {
  const [carros, setCarros] = useState([])
  const [marca, setMarca] = useState('')
  const [modelo, setModelo] = useState('')
  const [ano, setAno] = useState('')

  //Consumindo o HOOk
  const url = "http://localhost:3000/carros"
  const {data: items, httpConfig} = useFetch(url)

  /* 
    useEffect(() => {
      const fetchData = async() =>{
        const res = await fetch(url)
        const dados = await res.json()
        setCarros(carros)
      }

      fetchData()
    }, [])

  */
 
  //Adicionando produtos

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const car ={
      marca,
      modelo,
      ano
    }

    httpConfig(car, "POST")

    setMarca('')
    setModelo('')
    setAno('')

  }
  return (
    <>
      <h1>Lista de carros</h1>
      <ul>
        {items && items.map((carros) =>(
          <li key={carros.id}>
            {carros.marca} - {carros.modelo} - {carros.ano}
          </li>
        ))}
      </ul>
      <div className="add-produto">
        <form onSubmit={handleSubmit}>
          <label >
            Nome:
            <input type="text" value={marca} name="marca" onChange={(e)=> setMarca(e.target.value)} />
          </label>
          <label >
            Modelo:
            <input type="text" value={modelo} name="modelo" onChange={(e)=> setModelo(e.target.value)} />
          </label>
          <label >
            Ano:
            <input type="number" value={ano} name="ano" onChange={(e)=> setAno(e.target.value)} />
          </label>
          <button>Criar</button>
        </form>
      </div>
    </>
  )
}

export default App