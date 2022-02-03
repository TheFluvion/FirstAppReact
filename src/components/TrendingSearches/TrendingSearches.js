import React, {useState, useEffect} from "react"
import Category from "components/Category"
import getTrendingTerms from "services/getTrendingTermsService"

export default function TreandingSearches(){
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingTerms().then(setTrends)

    }, [])

    return <Category name = 'Tendencias' options={trends}></Category>
}