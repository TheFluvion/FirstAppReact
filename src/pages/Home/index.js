import SearchForm from 'components/SearchForm'
import TreandingSearches from 'components/TrendingSearches'
import ListOfGifs from '../../components/ListOfGifs/listOfGifs'
import { useGifs } from '../../hooks/useGifs'
import { Helmet } from 'react-helmet'


export default function Home() {
    const { loading, gifs } = useGifs()

    return (
        <>
            <Helmet>
                <title>Home || Fluvion</title>
            </Helmet>
            <header className='ho-header'>
            <SearchForm></SearchForm>
            </header>
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
//componente es una funcion, y elemento es cuando se hace llamado a esa funcion