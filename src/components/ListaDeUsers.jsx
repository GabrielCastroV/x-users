import User from "./User.jsx"
import '../styles/listadeusers.css'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ListaDeUsers = () => {

  const users = [
    {
      id:1,
      username: 'avocadostoasted',
      name: 'Gabriel Castro',
      isFollowing: false
    },
    {
      id:2,
      username: 'elonmusk',
      name: 'Elon Musk',
      isFollowing: false
    },
    {
      id:3,
      username: 'arcticmonkeys',
      name: 'ArcticMonkeys',
      isFollowing: false
    },
    {
      id:4,
      username: 'sushitrash',
      name: 'Joji',
      isFollowing: false
    },
    {
      id:5,
      username: 'spotify',
      name: 'Spotify',
      isFollowing: false
    },
    {
      id:6,
      username: 'xqc',
      name: 'xQc',
      isFollowing: false
    },
    {
      id:7,
      username: 'jypetwice',
      name: 'Twice',
      isFollowing: false
    },
  ];

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