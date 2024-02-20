import React from 'react'

const Car = ({brand, km, color, newCar}) => {
  return (
    <div>
        <h1>Detalhes do carro</h1>
        <p>Marca: {brand}</p>
        <p>Quilometragem: {km}</p>
        <p>Cor: {color}</p>
        {newCar && <p>Novo carro</p>}
    </div>
  )
}
export default Car