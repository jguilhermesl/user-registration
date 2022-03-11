import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

import Profiles from '../../images/profiles.png';
import Trash from '../../images/lixo.png';


import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  Button,
  User
} from './styles.js'

const Users = () => {
  // const users = []

  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchUsers(){
      const { data: newUsers } = await axios.get("http://localhost:3003/users");
    
    setUsers(newUsers);
    }
    fetchUsers()
    
  }, [])

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3003/users/${userId}`)
    const newUsers = users.filter(user => user.id !== userId)
    setUsers(newUsers)
  }


  return (
    <Container>
      <ContainerItens>
        <Imagem alt="Pessoas conversando" src={Profiles} />
        <H1>Usuários</H1>

        <ul>
          {users.map(user => (
            <User key={user.id}>
              <p>{user.name}</p>
              <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}> <img src={Trash} alt="Lata de lixo" /> </button>

            </User>
          ))}
        </ul>

        <Button to="/">Voltar</Button>

      </ContainerItens>
    </Container>
  )
}

export default Users