import MovieCard from "./MovieCard"

const PopularMovie = ({movies,isFav}) => {
  function Favorites(){
    return (
      <h1 className="text-white text-4xl mt-10 mb-5 " >Here are your Favorites</h1>
    )
  }
  function NotFav(){
    return(
    <h1 className="text-white text-3xl mt-8 mb-5" >What's Popular</h1>
    )
  }
  return (
    <div className="bg-black border-4 border-black max-w-7xl mx-auto pb-10 px-4  rounded-lg" >
        {isFav? <Favorites /> : <NotFav />}
    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-5">
    {
      movies.map((movie) => {
        return(
        <MovieCard movie={movie} key={movie.id} />
        )
      })
    }
    </div>
   

    </div>
  )
}

export default PopularMovie