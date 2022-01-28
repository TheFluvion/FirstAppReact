import TreandingSearches from 'components/TrendingSearches'
import React, { useState } from 'react'
import { Link, useLocation } from "wouter"
import ListOfGifs from '../../components/ListOfGifs/listOfGifs'
import { useGifs } from '../../hooks/useGifs'


export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()

    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}`)

    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input placeholder='Search a gif...'
                    onChange={handleChange}
                    type='text' value={keyword}
                />
            </form>
            <div className='App-main'>
                <div className='App-results'>
                    <h3 className='App-title'>Ultima busqueda</h3>
                    <ListOfGifs gifs={gifs}></ListOfGifs>
                </div>
                <div className='App-category'>
                    <TreandingSearches>

                    </TreandingSearches>
                </div>
            </div>
        </>
    )
}