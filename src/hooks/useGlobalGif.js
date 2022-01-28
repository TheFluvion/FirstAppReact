import { useContext } from 'react'
import GifContext from '../Context/GifsContext'

export default function useGlobalGif() {
    const {gifs} = useContext(GifContext)
    return gifs
}