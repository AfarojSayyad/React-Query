import React, { useState } from "react";
import { useAddSuperHeroData, useSuperHeroesData } from "./hooks/useSuperHeroesData";
import { Link } from "react-router-dom";
// c:useQuery : usequery is the hook which we are going to use for all our data fetching need 
// c: this hook needs at least 2 arguments to identify this query

export const RQSuperHeroesPage=()=>
{

    //c: new code for adding new superHero information
    const [name, setName] = useState('')
    const [alterEgo, setAlterEgo] = useState('')
    // new hero info end here

    const onSuccess = (data) => {
        console.log('Perform side effect after data fetchng',data);
    }

    const onError = (error) => {
        console.log('Perform side effect after encountering error',error);
    }

    //c:one way to fetch the data
    // const {isLoading, data}=useQuery('seper-heroes', ()=> {
    //    return axios.get('http://localhost:3000/superheroes')

    // })

    // c: another way to fetch the data
    const {isLoading, data, isError, error, isFetching, refetch }= useSuperHeroesData(onSuccess, onError);
    //c: here mutate is a function to call a post request
    const{mutate : addHero }=useAddSuperHeroData()

    const handleAddHeroClick=()=>{
        console.log({name, alterEgo});
        const hero = {name, alterEgo}
        addHero(hero)
    }

    // c: when we first time load the data the isLoading and is fetching is set to true.
    // and when data is loaded from query cache the loading text will remain set as false and is fetching is also set as false
    // But when we add or update the data in db.json file isLoading remail false but isFetching set as true and when new data is loaded then both will remain as false for the subsequent.
    console.log({ isLoading, isFetching})

    if(isLoading || isFetching){
        return <h2>Loading...</h2>
    }
    if(isError){
        return <h2>{error.message}</h2>
    }
    return(
        <>
            <h1> RQ Super Heroes Page</h1>
            {/* new code for adding new information of new superHero */}
            <div>
                <input 
                    type='text'
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                />
                <input
                    type='text'
                    value={alterEgo}
                    onChange={(e)=> setAlterEgo(e.target.value)}
                />
                <button onClick={handleAddHeroClick}>Add Hero</button>
                
            </div>
            {/*  */}
            {/* c:By using refetch property we can show the data onClick event */}
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((hero)=>{
                return <div key={hero.id}>
                  <Link to={`/rq-super-hero/${hero.id}`}> {hero.name}</Link>
                </div>
             })}
            {/* {
                //c: data here refers to the superHeroNames array
                data.map(heroName => {
                    return <div key={heroName}> {heroName }</div>
                })
            } */}
            

        </>
    ) 
}
