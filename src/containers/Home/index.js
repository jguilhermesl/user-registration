import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

import People from '../../images/conversation.png';


import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  Input,
  CheckedUser,
  Button,
  ButtonToUsers
} from './styles.js'

const Home = () => {
  // const users = []

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  const [messageSuccess, setMessageSuccess] = useState(false)

  async function addNewUser() {    
     const { data: newUser} = await axios.post("http://localhost:3003/users",  { 
      name: inputName.current.value, 
      age: inputAge.current.value,
    })

    setUsers([... users, newUser])
    
    setMessageSuccess(!messageSuccess)
    setTimeout(() => { 
      setMessageSuccess(false)
    }, 1500)
     
  }

  return (
    <Container>
      <ContainerItens>
        <Imagem alt="Pessoas conversando" src={People} />
        <H1>Insira seus dados.</H1>

        <Input ref={inputName} placeholder="Nome" />

        <Input ref={inputAge} placeholder="Idade" />

        {messageSuccess ? (
          <CheckedUser>Usuário cadastrado.</CheckedUser>
        ) : ''}
        

        <Button onClick={addNewUser}>Cadastrar</Button>

        <ButtonToUsers to="/usuarios">Usuários</ButtonToUsers>
        
      </ContainerItens>
    </Container>
  )
}
export default Home