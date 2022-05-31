import React from "react";
import { useQuery } from "react-query";
// c:useQuery : usequery is the hook which we are going to use for all our data fetching need
// c: this hook needs at least 2 arguments to identify this query
import axios from "axios";
 
const fetchSuperHeroes = () => {
   return axios.get('http://localhost:3000/superheroes')
}
 
export const SuperHeroNames=()=>
{
                                                                            //key
    const {isLoading, data, isError, error, isFetching, refetch }=useQuery('seper-heroes', fetchSuperHeroes,
    {
        // cacheTime: 5000, //c:default cache time is of 5 mins but you can set your own cache time is here
        //staleTime:30000 //c: default staleTime is 0 seconds.used to reduce network requests if we don't have frequently updating data
        //refetchOnMount: true //c: dafault value is true.the query will refetch onMount if the data is stale/ in other words data is fetchedevery time when the component mounts
        //refetchOnMount: false //c: In this case the data will not fetched onMount.
        //refetchOnMount:'always'
        //refetchOnWindowFocus:true//c:It will update the data automatically when the window is focused.
        //refetchOnWindowFocus:false
        //refetchOnWindowFocus:'always'
        //refetchInterval: 2000 //c: it will fetch the data for every 2 seconds
        refetchIntervalInBackground : true, //c:It will fetch the data even when screen is not on focus.
        enabled: false //c:It won't show any data
    }
    )
  
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
            <h1> Super Heroes Names Page</h1>
            {/* c:By using refetch property we can show the data onClick event */}
            <button onClick={refetch}>Fetch Heroes</button>
            {data?.data.map((hero)=>{
                return <div key={hero.alterEgo}>
                   {hero.alterEgo}
                </div>
            })}
  
        </>
    )
 }
  
 



