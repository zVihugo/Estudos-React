const TemplateExpressions = () => {
    const name = "Victor"
    const sobrenome = "Moreira"
    const data = {
        idd: 2,
        job: "Developer",

    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job}</p>
        </div>
    )
}

export default TemplateExpressions