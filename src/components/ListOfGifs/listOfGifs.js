import React from 'react';
import Gif from '../Gif/gif'
import './style.css'

export default function ListOfGifs({ gifs }) {
    return <div className='ListOfGifs'>
        {
            gifs.map(({ id, title, url }) =>
                <Gif
                    key={id}
                    title={title}
                    url={url}
                    id={id}
                />)
        }
    </div>
}