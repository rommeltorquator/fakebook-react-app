import './App.css';
import { useState, useEffect } from 'react';
import Axios from 'axios'; // npm i axios
import Users from './components/Users';
import Character from './components/Character';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  const [names, setNames] = useState([])
  const [status, setStatus] = useState()
  let url = 'https://rickandmortyapi.com/api/character/?count=16';

  async function getUsers() {
    var result = await Axios.get(url)
    setNames(result.data.results)
    setStatus(result.status)
  }

  useEffect(() => {
    getUsers()
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <Users names={ names } status={ status } />} />
          <Route path="/character/:id" exact component={Character} />
          <Route path="*" exact component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
