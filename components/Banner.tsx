import {useState, useEffect} from 'react'
import Image from 'next/image'
import {Movie} from '../typings'
import {baseUrl} from '../constants/movie'
import {FaPlay} from 'react-icons/fa'
import { InformationCircleIcon } from '@heroicons/react/outline'


interface Props {
	netflixOriginals : Movie[]
}
function Banner({netflixOriginals}: Props) {
	const [movie, setMovie] = useState<Movie | null>(null)
	useEffect(() => {
		setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])

	},[netflixOriginals])
	console.log(movie)
	return (
		<div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
			<div className="absolute top-0 left-0 h-[95vh] w-screen -z-10">
			<Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill" objectFit="cover"/>
			</div>
			<h1 className="text-2xl lg:text-7xl md:text-4xl font-bold">{movie?.title || movie?.name || movie?.original_name}</h1>
			<p className="max-w-xs text-xs text-white text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
		<div className="flex space-x-3">
         <button className="flex items-center gap-x-2  rounded px-5 py-1.5 bg-white text-black text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl;">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7 " />
          Play
        </button>
         <button className="flex items-center bg-[gray]/70 gap-x-2  rounded px-5 py-1.5 text-sm font-semibold transition hover:opacity-75 md:py-2.5 md:px-8 md:text-xl;">More Info<InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /></button>		</div>
		</div>
	)
}

export default Banner

