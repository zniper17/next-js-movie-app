
import axios from "axios";
import Image from "next/image";

import { server } from "../../../config";
import Meta from "../../../components/Meta";
import { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

const Movie = ({ movie }) => {
   const [isFav,setfav]=useState(false);
   useEffect(() => {
 const movieFavourites = JSON.parse(localStorage.getItem('user-fav-movie'))
 console.log(isFav);
 if(movieFavourites){
 const ids=movieFavourites.map((value) => {
  return value.id;

 })
 ids.map((id) => {
  if(movie.id==id){
    setfav(true)
  }
 })
}
   },[])
   function handleClickRemove(){
    const movieFavourites = JSON.parse(localStorage.getItem('user-fav-movie'));
   movieFavourites=movieFavourites.filter((value) => {
    return value.id!=movie.id
   })
    localStorage.setItem('user-fav-movie',JSON.stringify(movieFavourites))
    setfav(false)
   }

   function handleClickFav(){
    setfav(true)
    const newMovieFavourites=[]
    const newMovieFav={
      id:movie.id,
      poster_path:movie.poster_path,
      title:movie.title,
      release_date:movie.release_date
      

    }
    const movieFavourites = JSON.parse(localStorage.getItem('user-fav-movie'))
    if(movieFavourites){
       newMovieFavourites=[...movieFavourites,newMovieFav];
    }
    else{
       newMovieFavourites.push(newMovieFav)
    }
  
    localStorage.setItem('user-fav-movie',JSON.stringify(newMovieFavourites))
    
   }
 function RemoveFav (){
  return  <button className="px-8 py-5 bg-blue-500 rounded-lg text-white hover:text-blue-500 hover:bg-black duration-200 border-2 border-cyan-100 " onClick={handleClickRemove} >Remove from Favorites</button>
 }
 function AddFav(){
  return  <button className="px-8 py-5 bg-blue-500 rounded-lg text-white hover:text-blue-500 hover:bg-black duration-200 border-2 border-cyan-100 " onClick={handleClickFav} >Add to Favorites</button>
 }

  return (
    <div className="container max-w-4xl mx-auto pt-6">
     <Meta title={movie.title} />
     
      <div className="px-3 flex flex-col space-y-5">
        <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} width={1000} height={600} className="rounded-md" alt={movie.title} />
        <h1 className="font-bold text-xl my-2">{movie.title}</h1>
        <p className="text-gray-600 text-sm mt-4">{movie.overview}</p>
        <p className="mt-5 text-gray-600 text-sm">Genres: <span className="font-bold">{movie.genres.map(genre => genre.name).join(', ')}</span></p>
        <p className="text-gray-600 text-sm">Release Date: <span className="font-bold">{movie.release_date}</span></p>
        <div>
   {isFav? <RemoveFav /> :   <AddFav /> }
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.data;

  return {
    props: { movie }
  }
}

export async function getStaticPaths() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data.results;

  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: true
  }
}

export default Movie;