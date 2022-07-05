import Image from "next/dist/client/image"
import Link from 'next/link'
import SearchBox from "./SearchBox"
const Hero = ({handleSearch}) => {
  return (
    <div className="text-center bg-white pb-10 mt-10" >
    
       <div className=" flex items-center flex-col max-w-7xl mx-auto ">
       <SearchBox handleSearch={handleSearch} />
          <p className="text-gray-500 text-2xl">Search for your Favorites Movies</p>
       </div>
         
         
    </div>
  )
}

export default Hero