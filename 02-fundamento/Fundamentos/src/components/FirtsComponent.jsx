//Importando outro componente
import MyComponent from "./MyComponent"

//testando comentário

const FirstComponent = () => {
   
    //Testando comentário dentro da função
    return (
        <div>
            {/* Testando comentário dentro do return */}
            <h1>Meu primeiro component</h1>
            <p className="teste">Meu texto</p>
            <MyComponent/>
        </div>
    )
}

export default FirstComponent