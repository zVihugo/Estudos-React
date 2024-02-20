const Events = () => {
    const handleMyEvent = () => {
        console.log('Evento disparado')
    }

    const renderSomething = (x) =>{
        if(x){
            return <h1>Posso renderizar isso</h1>
        }else{
            return <h1>Também posso renderizar isso</h1>
        }
    }
    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>
            <div>
                {/*Isso é uma demonstração de uma função dentro do própio evento de click */}
                <button onClick={()=> console.log("Clickouuuuuu!!!!")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )

}

export default Events