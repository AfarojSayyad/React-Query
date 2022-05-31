import { useQuery, useMutation } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
    return axios.get('http://localhost:3000/superheroes')
}
//c:Mutations code for adding new info of new hero
// c: below function is going to acept the hero detail which we are going to pass in from our component
const addSuperHero=(hero)=>{
    return axios.post('http://localhost:3000/superheroes',hero)

}
export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery('seper-heroes', fetchSuperHeroes, 
            {
                // cacheTime: 5000, //c:default cache time is of 5 mins but you can set your own cache time is here
                //staleTime:30000 //c: default staleTime is 0 seconds.used to reduce network requests if we don't have frequently updating data
                //refetchOnMount: true //c: dafault value is true.the query will refetch onMount if the data is stale/ in other words data is fetchedevery time when the component mounts
                //refetchOnMount: false //c: In this case the data will not fetched onMount.
                //refetchOnMount:'always'
                //refetchOnWindowFocus:true//c:It will update the data automatically when the window is focused.
                //refetchOnWindowFocus:false
                //refetchOnWindowFocus:'always'
                //refetchInterval: 2000, //c: it will fetch the data for every 2 seconds
                //refetchIntervalInBackground : true, //c:It will fetch the data even when screen is not on focus. 
                //enabled: false //c:It won't show any data
                //key      //value
                onSuccess: onSuccess,
                onError:onError,
                //enabled:false,
                //c: data here refers to the superHeroNames array
                // select:(data) => {
                //     const superHeroNames = data.data.map(hero => hero.name)
                //     // const superHeroNames = data.data.map(hero => hero.alterEgo)
                //     return superHeroNames //c:It will change the destructured data to an array of superHeroNames
                // }


            }
    )

}
//Mutatons code for adding new info of new hero
export const useAddSuperHeroData=()=>{
    return useMutation(addSuperHero)
}