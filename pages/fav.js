import React, { useEffect, useState } from 'react'
import PopularMovie from '../components/PopularMovie'
const fav = () => {
  const [movie,setMovies]=useState([])
  useEffect(() => {

    const movieFavourites = JSON.parse(localStorage.getItem('user-fav-movie'));
    if(movieFavourites){
      setMovies(movieFavourites)
    }
  },[])
  return (
    <div className='bg-black h-screen'>
       <PopularMovie movies={movie}  isFav={true} />
    </div>
  )
}

export default fav