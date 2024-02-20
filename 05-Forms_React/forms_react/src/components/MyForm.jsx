import './MyForm.css'
import { useState } from 'react'

const MyForm = ({user}) => {
    //Controlled inputs

  //Gerenciamento de dados
  const[name, setName] = useState(user? user.name : "")
  const[email, setEmail] = useState(user? user.email : "")
  const[bio, setBio] = useState("")
  const[role, setRole] = useState("")
  const handleName = (e) =>{
    setName(e.target.value)
  }

  console.log(name)
  console.log(email)

  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log("Formulário enviado")
    console.log(name, email, bio, role)

    { /*Limpando o formulário*/}

    setName("")
    setEmail("")
    setBio("")
    setRole("")
  }

  

  return (
    <div>
        {  /*Envio de form*/ }
        { /* criação do Formulário */ }
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nome como texto</label>
                <input type="text" name="name" placeholder='Digite seu nome' onChange={handleName} value={name}/>
            </div>
            { /*Label envolvendo input*/ }
            <label>
                { /*Simplificação de manipulação de state*/}
                <span>E-mail</span>
                <input type="email" name="email"  placeholder='Digite seu email' onChange={(e)=> setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Bio</span>
                <textarea name="bio" placeholder='Insira sua bios' onChange={(e)=>setBio(e.target.value)} value={bio}></textarea>
            </label>
            <label>
                <span>Função</span>
                <select name="role" onChange={(e)=>setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm