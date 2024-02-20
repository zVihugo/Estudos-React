import biriri from "./Stilo.module.css";

const CarCss = ({car}) => {
  return (
    <div className = {biriri.card}>
        <h1>{car.brand}</h1>
        <p>Km: {car.km}</p>
        <p>Cor: {car.color}</p>
    </div>
  )
}

export default CarCss