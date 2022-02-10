import React, {useState} from "react";
import {useLocation } from "woutenpm r"
//este archivo se utiliza para evitar el multi renderizado de la aplicacion, evitar que se renderizen cosas que no son necesarias

const RATINGS = ['g', 'pg', 'pg-13', 'r']

function SearchForm() {
    const [keyword, setKeyword] = useState('')
    const [rating, useRating] = useState('g')
    const [path, pushLocation] = useLocation()


    const handleSubmit = evt => {
        evt.preventDefault()
          //navegar a otra ruta
          pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <button>Buscar</button>
            <input placeholder='Search a gif...'
                onChange={handleChange}
                type='text' value={keyword}
            />
        </form>
    )
}

export default React.memo(SearchForm) //react memo es para evitar que se renderice luego de ser iniciada