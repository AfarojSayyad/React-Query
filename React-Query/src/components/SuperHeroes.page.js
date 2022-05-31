import React, { useEffect,useState } from "react";

import axios from 'axios';
export const SuperHeroesPage=()=>
{
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const [error, setError] = useState('') 

    useEffect(()=>
    {
        axios.get('http://localhost:3000/superheroes').then(res => {
            setData(res.data)
            setIsLoading(false)
        })
        .catch((error) => {
            setError(error.message)
            setIsLoading(false)
        })
    },[])

    if(isLoading){
        return <h2>Loading....</h2>
    }

    if(error){
        return <h2>{error}</h2>
    }

    return (
        <>
            <h1> Super Heroes Page</h1>

            {data.map(hero => {
                return <div key={hero.name}>{hero.name}</div>
                // <div key={hero.alterEgo}>{hero.alterEgo}</div>
            })}
        </>
    
    )
}
