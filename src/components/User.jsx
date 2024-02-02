/* eslint-disable react/prop-types */
import '../styles/user.css'

const User = ({ id, username, name, isFollowing, cambiarFollow}) => {

  return (
    <div className="user-container" id={id}>
        <img src={`https://unavatar.io/twitter/${username}`} alt={`imagen de ${username}`} className='user-img'/>
        <div className='user-data'>
          <a href={`http://twitter.com/${username}`} className='user-name' target="_blank" rel="noopener noreferrer">{name}</a>
          <div className='user-at'>@{username}</div>
        </div>
        <button 
        className={isFollowing ? 'unfollow-btn' : 'follow-btn'}
        onClick={()=> cambiarFollow(id)}
        >
          { isFollowing ? 'Following' : 'Follow' }
        </button>
    </div>
  )
}

export default User