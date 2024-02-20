import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//importando imagens
import Caveira from './assets/img2.jpg'

//Importando componentes
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import Car from './components/Car'
import Fragment from './components/Fragment'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'
import Challenge from './components/Challenge'

//Funções
function father(){
  console.log("Meu pai é foda.....")
}
function App() {
  
  //variaveis
  const [count, setCount] = useState(0)
  const [userName] = useState("Victor")
  const cars = [
    {id: 1, brand: "Fiat", km: 1000, color: "red", newCar: false},
    {id: 2, brand: "Ford", km: 2000, color: "blue", newCar: true},
    {id: 3, brand: "Chevrolet", km: 3000, color: "green", newCar: false}
  ]
  
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }
  
  //Desafio 04
  const pessoas = [{id: 1, nome: "Victor", idade: 20, profissao: "Desenvolvedor"}, {id: 2, nome: "João", idade: 25, profissao: "Desenvolvedor"}, {id: 3, nome: "Maria", idade: 30, profissao: "Desenvolvedor"}]

  //Retorno
  return (
    <>
      <h1>Ola aumigos</h1>
      {/*	Imagem em public*/}
      <div>
        <img src="/img1.jpg" alt="Bicho fofo" />
      </div>
      {/*	Imagem em asset*/}
      <div>
        <img src={Caveira} alt="Caveira" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/*Props*/}
      <ShowUserName name = {userName}/>
      {/*Descructuring*/}
      <Car brand = "Fiat" km = {1000} color = "red"/>
      {/*Reutilizando componentes*/}
      <Car brand = "Ford" km = {2000} color = "blue" newCar={false}/>
      <Car brand = "Chevrolet" km = {3000} color = "green" newCar={true}/>
      {/*Loop em array de objetos*/}
      {cars.map((car)=>(
        <Car key = {car.id} brand = {car.brand} km = {car.km} color = {car.color} newCar = {car.newCar}/>
      ))}
      {/*React Fragments*/}
      <Fragment/>
      {/*Children Pop*/}
      <Container>
        <p>Este é o conteudo</p>
      </Container>
      {/*Executando função pai dentro do componente filho*/}
      <ExecuteFunction father={father}/>
      {/*State lift*/}
      <Message msg = {message}/>
      <ChangeMessageState handleMessage = {handleMessage}/>
      {/*Desafio 04*/}
      {pessoas.map((pep) => (
        <Challenge key = {pep.id} nome = {pep.nome} idade = {pep.idade} profissao = {pep.profissao}/>
      ))}
    </>
  )
}

export default App
