import React, {createContext, useState} from 'react'


export const Movie =createContext()
function MovieDemo ({children}){
    const [movie, setMovie] = useState([])
    const [searchMovie, setSearchmovie]=useState('')
    const [selectMovie, setSelectMovie]=useState('')
  return (
    <Movie.Provider value={{movie, setMovie, searchMovie, setSearchmovie, selectMovie, setSelectMovie}}>
     {children}
    </Movie.Provider>
  )
}

export default MovieDemo