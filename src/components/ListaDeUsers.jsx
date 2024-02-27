import User from "./User.jsx"
import '../styles/listadeusers.css'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import users from '../mocks/users.json'

const ListaDeUsers = () => {

  const [follow, setFollow] = useState(users);

  const cambiarFollow = id => {
    const usersUpdated = follow.map(user => {
      if (user.id === id) {
        user.isFollowing = !user.isFollowing
      }
      return user;
    })
    setFollow(usersUpdated)
  }

  return (
    <>
        <h3>People you may follow</h3>
        {
            follow.map((user) =>
              <User
              key={uuidv4()}
              id={user.id}
              username={user.username}
              name={user.name}
              isFollowing={user.isFollowing}
              cambiarFollow={cambiarFollow}
              />
            )
        }
    </>
  )
}

export default ListaDeUsers