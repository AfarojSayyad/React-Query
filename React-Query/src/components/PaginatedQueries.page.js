import { useState } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchColors = (pageNumber) => {
  return axios.get(` http://localhost:3000/colors?_limit=2&_page=${pageNumber}`)
}

export const PaginatedQueriesPage = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const { isLoading, isError, error, data, isFetching } = useQuery(['colors',pageNumber],
    
    ()=>fetchColors (pageNumber),
    {
      //c: If we use this then react query will maintain the data from the last successful 
      //fetch while the new data is beng requested eventhough the query key has been changed.
    //   and when the data arrives the previous data is seemlessly swapped to show the new data

      keepPreviousData: true
    }
  )

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <div>
          {
              data?.data.map((color)=>{
                  return(
                      <div key={color.id}>
                          <h2>
                              {color.id}.{color.label}
                          </h2>
                      </div>
                  )
              })
          }

      </div>
      <div>
        <button
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber === 1}>
          Previous Page
        </button>
        <button
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber === 4}>
          Next Page
        </button>
      </div>
      {isFetching && 'Loading'}
    </>
  )
}