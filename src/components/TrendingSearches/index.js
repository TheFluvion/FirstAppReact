import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTermsService";
import Category from "../Category";

function TreandingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)

    }, [])

    return <Category name = 'Tendencias' options={trends}></Category>
}

export default function LazyTrending (){
    const [show, useShow] = useState(false)

    useEffect(function(){
        const onChange = (entries) =>{

        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: '100px'
        })

        observer.observe(document.getElementById('LazyTrending'))
    })

    return <div id="LazyTrending">
        {show ? <TreandingSearches></TreandingSearches> : null}
    </div>
}