const Challenge = () => {
    const numbers = {n1: 1, n2: 2}

    return (
        <div>
            <h1>Estes são meus numeros: {numbers.n1} e {numbers.n2}</h1>
            <button onClick = {()=> console.log("A soma dos números é " + (numbers.n1 + numbers.n2))}> Clique aqui para saber a soma</button>
        </div>
    )


}

export default Challenge