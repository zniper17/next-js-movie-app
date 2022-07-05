import axios from "axios";
import { useState } from "react";
import Hero from "../components/Hero";
import PopularMovie from "../components/PopularMovie";
import { server } from "../config";



export default function Home(props) {
  
  const [movies,setMovies]=useState(props.movies)
  const [search,SetSearch]=useState('')

 
 async function handleSearch(value){
        SetSearch(value);
        const {data}=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=2eebc7cb568454ade6b645325966063e&language=en-US&query=${search}&page=1&include_adult=false`)
       
     setMovies(data)
       
  }
function favoriteHandler(){

}
 
  return (
    <div className="bg-[#111]">
  <Hero handleSearch={handleSearch} />
  <PopularMovie movies={movies.results}  isFav={false} />
    </div>
  )
}
  
//To fetch popular movies in the first page
export async function getStaticProps(){

const res = await axios (`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
const movies=res.data


  return {
    props:{ movies}
  }

}

// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1

