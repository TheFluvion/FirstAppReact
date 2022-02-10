import Spinner from 'components/spinner'
import useSingleGif from 'hooks/useSingleGif'
import useSEO from 'hooks/useSEO'
import React from 'react'
import { Redirect } from 'wouter'
import Gif from '../../components/Gif/gif'
import { Helmet } from 'react-helmet'

export default function Detail({ params }) {
    const {gif, isLoading, isError} = useSingleGif({ id: params.id })
    const title = gif ? gif.title: ''

    if(isLoading) {
        return (
            <>
                <Helmet>
                    <title>Cargando...</title>
                </Helmet>
                <Spinner></Spinner>
            </>
        )
    }
    if(isError) return <Redirect to='/404'></Redirect>
    if (!gif) return null

    return <>
        <Helmet>
            <title>{title} || Fluvion</title>
        </Helmet>
        <h3 className='App-title'>{gif.title}
        </h3>
        <Gif {...gif}></Gif>
    </>
}