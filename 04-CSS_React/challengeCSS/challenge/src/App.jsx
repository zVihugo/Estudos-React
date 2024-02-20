import './App.css'
import CarCSS from "./components/CarCss"

function App() {
  const cars = [
    {id: 1, brand: "Fiat", km: 1000, color: "red", newCar: false},
    {id: 2, brand: "Ford", km: 2000, color: "blue", newCar: true},
    {id: 3, brand: "Chevrolet", km: 3000, color: "green", newCar: false}
  ]

  return (
    <>
      <h1>Showroom de carros</h1>
      <div className= "car_conteiner">
        {cars.map((car)=>(
          <CarCSS key={car.id} car={car}/>
        ))}
      </div>
    </>
  )
}

export default App
