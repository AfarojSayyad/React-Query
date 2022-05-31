
import { useQueries, useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail  = (email) =>{
    return axios.get(`http://localhost:3000/users/${email}`)
}
const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:3000/channels/${channelId}`)
}

export const DependentQueriesPage=({ email })=>
{
    const {data: user} =useQuery(['user', email], ()=>fetchUserByEmail(email))

    const channelId = user?.data.channelId 

    useQuery(['courses', channelId],()=> fetchCoursesByChannelId(channelId), {
        enabled: !!channelId,
    })


    return (
    <>
      <div>Dependent Queries</div>

      {/* {user?.data?.map((user)=>
      {
          <div key={user.email}>{user.email}</div>
      }
      )} */}

      
    </>)
}