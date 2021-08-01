import { useHistory } from 'react-router-dom'

const User = ({ name }) => {
  const history = useHistory();

  return (
    <>
      <img className="image" alt={ name.name } src={ name.image } />
      <p className="text-center">Name: <strong>{ name.name }</strong></p>
      <p className="text-center">Species: <strong>{ name.species }</strong></p>
      <p className="text-center">
        <button className="profile-btn" onClick={() => history.push(`/character/${name.id}`)}>View Profile</button>
      </p>
    </>
  )
}

export default User
