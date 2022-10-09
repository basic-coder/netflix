import React, { useEffect, useState } from 'react'
import './banner.css'
import bannerImg from '../../images/banner.png';
import axios from '../../api/axios';
import request from '../../api/request';

const Banner = () => {

    const [movie, setMovie] = useState([])

    const truncateString = (string, n) =>{
        return string?.length > n ? string.substr(0,n-1)+ '...' : string;
    }

    useEffect(()=>{
        async function fetchData(){
            const req = await axios.get(request.fetchNetflixOriginals);
            setMovie(req.data.results[Math.floor(Math.random() * req.data.results.length -1)])
            return req
        }
         fetchData()
    },[])

  return (
    <header className='banner' style={{
        // backgroundImage: `url(${bannerImg})`,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: 'cover', backgroundPosition : 'center center'}}>
        <div className="banner__contents">
            <h1 className="banner__title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">Add to Wishlist</button>
            </div>
            <h1 className="banner__description">  
                {truncateString(movie?.overview,150)}
            </h1>
        </div>

        <div className="banner--fadeBottom" />
    </header>
  )
}

export default Banner