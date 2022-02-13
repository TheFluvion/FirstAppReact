import React from "react";
import { useLocation } from "wouter"
import UseForm from "./hook";
//este archivo se utiliza para evitar el multi renderizado de la aplicacion, evitar que se renderizen cosas que no son necesarias
//decodeURIComponent(initialKeyword) sirve para corregir el valor que js le asigna a los espacios cuando se escribe

const RATINGS = ['g', 'pg', 'pg-13', 'r']



function SearchForm({ initialKeyword = '', initialRating = 'g' }) {
    //const [rating, setRating] = useState(initialRating)

    const { keyword, rating, times, updateKeyword, updateRating } = UseForm({
        initialKeyword, initialRating
    })

    const [path, pushLocation] = useLocation()


    const handleSubmit = (evt) => {
        evt.preventDefault()
        //navegar a otra ruta
        pushLocation(`/search/${keyword}/${rating}`)
    }

    const handleChange = (evt) => {
        updateKeyword(evt.target.value)
    }

    const handleChangeRating = (evt) => {
        updateRating(evt.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className="search">
            <button className="search-button">Buscar</button>
            <input className="search-input" placeholder='Search a gif...'
                onChange={handleChange}
                type='text' value={keyword}
            ></input>
            <select onChange={handleChangeRating} value={rating}>
                <option disabled>Rating type</option>
                {RATINGS.map(rating => <option key={rating}>{rating}</option>)}
            </select>
            <small>{times}</small>
        </form>
    )
}

export default React.memo(SearchForm) //react memo es para evitar que se renderice luego de ser iniciada