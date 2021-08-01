import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import Details from './Details';

const Character = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState()

  let url = `https://rickandmortyapi.com/api/character/${id}`;

  async function getUser() {
    var result = await Axios.get(url)
    setCharacter(result.data)
  }

  useEffect(() => {
    getUser()
  }, []);

  return (
    <>
      {character && <Details character={character} />}
    </>
  )
}

export default Character
