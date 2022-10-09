import React from 'react'
import request from '../../api/request'
import Banner from '../../components/banner/Banner'
import Nav from '../../components/nav/Nav'
import Row from '../../components/rows/Row'
import './home.css'

const HomePage = () => {
  return (
    <div className='container homeScreen'>
        <Nav />
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
        <Row title="Top Rated" fetchUrl={request.fetchTopRated} isLargeRow />
        <Row title="Trending Now" fetchUrl={request.fetchTrending} isLargeRow />
        <Row title="Action Movies" fetchUrl={request.fetchActionMovies} isLargeRow />
        <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} isLargeRow />
        <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} isLargeRow />
        <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} isLargeRow />

    </div>
  )
}

export default HomePage