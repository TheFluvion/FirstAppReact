import {useContext, useEffect, useState } from "react"
import getGifs from "../services/getGifs"
import GifContext from '../Context/GifsContext'

const INITAL_PAGE = 0

export function useGifs({ keyword, rating } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITAL_PAGE)
    const {gifs, setGifs} = useContext(GifContext)

    //recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem
    ('lastKeyword') || 'random'

    useEffect(function () {
        setLoading(true)

        getGifs({ keyword: keywordToUse, rating })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //guardamos la keyword en el localStorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, keywordToUse, rating, setGifs])

    useEffect (function () {
        if (page === INITAL_PAGE) return

        setLoadingNextPage(true)
        getGifs({ keyword: keywordToUse, page, rating})
        .then(nextGifs => {
            setGifs( prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
    })
    }, [keywordToUse, page, rating, setGifs])


    return { loading, loadingNextPage, gifs, setPage }
}

/*
    [arreglos: maximo devolver 2 cosas]
    {objetos: para devolver a gusto}
*/