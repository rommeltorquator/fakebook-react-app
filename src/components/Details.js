import { useHistory } from 'react-router-dom';

const Details = ({ character }) => {
  const history = useHistory();

  return (
    <div>
      <div className="card-character">
        <h1 className="main-heading">{ character.name }</h1>
        <img className="image" alt={ character.name } src={ character.image } />
        <p className="text-center">Species: <strong>{ character.species }</strong></p>
        <p className="text-center">Gender: <strong>{ character.gender }</strong></p>
        <p className="text-center">Origin: <strong>{ character.origin.name }</strong></p>
        <p className="text-center">Location: <strong>{ character.location.name }</strong></p>
        <p className="text-center">Status: <strong>{ character.status }</strong></p>
        <br/>
        <p className="text-center">{ character.name } appeared on { character.episode.length } { character.episode.length > 1 ? 'episodes' : 'episode' }</p>
        <p className="text-center">
          <button className="profile-btn" onClick={() => history.push('/')}>Back to home</button>
        </p>
      </div>
    </div>
  )
}

export default Details
