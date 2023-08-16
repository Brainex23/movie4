import React, { useContext, useEffect } from 'react'
import {Movie} from '../Movie'
import Item from './Item'

function List() {
    const {movie, setMovie, searchMovie, setSelectMovie} =useContext(Movie)
    
    const url = 'https://api.themoviedb.org/3/'
    const apikey = '/movie?api_key=9edb0f3bbcd85a93b6131c4b7f66c16c&query='
    useEffect(() =>{
        const myFilm =async()=>{
            const type = searchMovie ? 'search' : 'discover';
            const response = await fetch(`${url}${type}${apikey}${searchMovie}`)
            const data = await response.json();
            console.log(movie);
            setMovie(data.results)
            setSelectMovie(data.results[0])
       
        }

        myFilm()
    }, [setMovie, movie, searchMovie, setSelectMovie])

  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
        {movie.map((x) =>(
            <Item key={x.id} x={x}/>
        ))}
    </div>
  )
}

export default List