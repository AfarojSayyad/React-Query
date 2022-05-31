import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes=()=>{
    return axios.get("http://localhost:3000/superheroes")
}

const fetchFreinds=()=>{
    return axios.get("http://localhost:3000/freinds")
}
export const ParallelQueriesPage=()=>
{
    //aliases
    const{ data: superheroes}=useQuery('super-heroes',fetchSuperHeroes)
    const { data: freinds }=useQuery('freinds', fetchFreinds)
    console.log(superheroes, freinds );
    // return <div>ParallelQueriesPage</div>
    return(
        <>
            <h1> Parallel Queries Page</h1>
            {/* c:By using refetch property we can show the data onClick event */}
            {/* <button onClick={refetch}>Fetch Heroes</button> */}

            <h2>Super Heroes</h2>
            {superheroes?.data?.map((hero)=>{
                return <div key={hero.name}>
                   {hero.name}
                </div>
            })}

            <h2>Freinds</h2>

            {freinds?.data?.map((freinds)=>{
                return <div key={freinds.name}>
                   {freinds.name}
                </div>
            })}
  
        </>
    )
}