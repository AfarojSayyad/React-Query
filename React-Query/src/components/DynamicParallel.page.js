import { useQueries } from "react-query";
import axios from "axios";

const fetchSuperHero = (heroId) =>{
    return axios.get(`http://localhost:3000/superheroes/${heroId}`)
}

export const DynamicParallelPage = ({heroIds}) => {
    const queryResults = useQueries(
        heroIds.map((id) => {
            return {
                queryKey:[ 'super-hero', id],
                queryFn: () => fetchSuperHero(id),
            }
        })
    ) 

    console.log({ queryResults });
    return (
    <>
        <h1>Dynamic Prallel Page</h1>
        {/* <div>{heroIds.queryResults}</div> */}
        {/* {queryResults?.map((hero)=>{
                return <div key={hero.name}>
                   {hero.name}
                </div>
            })} */}

            {queryResults?.map((hero)=>
            {
                return <div key={hero.queryResults}>
                    ssds
                    wdwedw
                    {hero.queryResults}
                </div>
            }
            )}

        {/* <div>{JSON.stringify(queryResults)}</div> */}
        {/* <div>{data.map.queryResults}</div> */}
        
    </>
    )
}
// export const DynamicParallelPage = () => {
//     return (
//     <div>
//         <h1>Dynamic Prallel Page</h1>
//     </div>
//     )
// }