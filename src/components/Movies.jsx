import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import axios from 'axios';

function Movies() {

    const [movies , setMovies] = useState([])

    useEffect(()=>{
      axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=61bde5aa7c39780518138a8475acf65e&language=en-US&page=5`).then(function(res){
        setMovies(res.data.results)
      })
    }, [])
    
  return (
    <div className='p-5'>
       <div className='text-2xl m-5 font-bold text-center'>
        Trending Movies
       </div>
       <div className='flex flex-row flex-wrap justify-around gap-8'>
        {movies.map((movieObj)=>{
          return <MovieCard poster_path={movieObj.poster_path} name={movieObj.original_title}/>
        })}
       </div>
    </div>
  )
}

export default Movies

// https://api.themoviedb.org/3/movie/popular?api_key=61bde5aa7c39780518138a8475acf65e&language=en-US&page=2
