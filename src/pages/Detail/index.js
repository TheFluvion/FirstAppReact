import React from 'react'
import Gif from '../../components/Gif/gif'
import useGlobalGif from '../../hooks/useGlobalGif'

export default function Detail({ params }) 
{
    const gifs = useGlobalGif()

    const gif = gifs.find(singleGif =>
        singleGif.id === params.id
    )

    return <>
        <h3 className='App-title'>{gif.title}
        </h3>
        <Gif {...gif}></Gif>
    </>
}