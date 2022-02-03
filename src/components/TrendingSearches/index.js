import React, {Suspense} from "react";
import useNearScreen from "hooks/useNearScreen";
import Spinner from "components/spinner";

const TreandingSearches = React.lazy( //React.lazy se utiliza para cargar la funcion llamada solo cuando se la necesite
    () => import('./TrendingSearches')
)

export default function LazyTrending (){
    const {isNearScreen, fromRef} = useNearScreen()
   

    return <div ref={fromRef}>
        <Suspense fallback={<Spinner></Spinner>}> 
        {isNearScreen ? <TreandingSearches></TreandingSearches> : <Spinner></Spinner>}
        </Suspense>
    </div>
}