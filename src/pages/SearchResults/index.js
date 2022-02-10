import React, { useCallback, useEffect, useRef } from 'react'
import Spinner from '../../components/spinner'
import ListOfGifs from '../../components/ListOfGifs/listOfGifs'
import { useGifs } from '../../hooks/useGifs'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })
    const externalRef = useRef()
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    })

    const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''

    //useCallback es una forma de evitar volver a crear la misma funcion entre renderizados
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    //useEffect se hace llamado a la funcion cuando se renderiza
    useEffect(function () {
        if (isNearScreen) debounceHandleNextPage()
    }, [debounceHandleNextPage, isNearScreen])

    return <>
        {loading
            ? <Spinner />
            : <>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
                <header className='ho-header'>
                    <SearchForm></SearchForm>
                </header>
                <h3 className='App-title'>
                    {decodeURI(keyword)}
                </h3>
                <ListOfGifs gifs={gifs} />
                <div id="visor" ref={externalRef}></div>
            </>
        }
    </>
}