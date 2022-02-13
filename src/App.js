import React from 'react';
import './App.css';
import image from './triple dragon.jpg'
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './Context/StaticContext'

import { Link, Route } from "wouter"
import { GifsContextProvider } from './Context/GifsContext';

export default function App() {
  /* const [keyword, setKeyword] = useState('Argentina') */

  return (
    <StaticContext.Provider value={{
      name: 'Fluvion',
      suscribete: true
    }
    }>
      <div className="App">
        <section className="App-content">
          <Link to='http://localhost:3000/'>
            <img className='im-gif' alt='im-gif' src={image}></img>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            ></Route>
            <Route
              component={SearchResults}
              path='/search/:keyword/:rating?'
            ></Route>
            <Route
              component={Detail}
              path='/gif/:id'
            ></Route>
            <Route
              component={() => <h1>ERROR 404 UwU</h1>}
              path='/404'>
            </Route>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}