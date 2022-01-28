import React from 'react';
import './App.css';
import image from './image.jpg'
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
      name: 'midudev',
      suscribete: true
    }
    }>
      <div className="App">
        <section className="App-content">
          <Link to='/'>
            <img className='im-gif' alt='im-gif' src={image}></img>
          </Link>
          <GifsContextProvider>
            <Route
              component={Home}
              path='/'
            ></Route>
            <Route
              component={SearchResults}
              path='/search/:keyword'
            ></Route>
            <Route
              component={Detail}
              path='/gif/:id'
            ></Route>
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}