const Challenge = ({nome, idade, profissao}) => {
    return (
      <div>
          <h2>Informações usuários</h2>
          <ul>
              <li>Nome: {nome}</li>
              <li>Idade: {idade}</li>
              <li>Profissão: {profissao}</li>
              {idade >= 18 && <li>Usuário pode tirar carteira</li>}
          </ul>
      </div>
    )
  }
  
  export default Challenge