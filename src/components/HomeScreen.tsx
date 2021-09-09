import React from 'react'
import './HomeScreen.css'
import Nav from './Nav'
import Banner from './Banner'
import Row from './Row'
function HomeScreen() {
const api = [
    {
        title: 'NETFLIX ORIGINALS',
        fetchUrl: 'https://api.themoviedb.org/3/discover/tv?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_networks=213'
    },
    {
        title: 'Top Rated',
        fetchUrl: 'https://api.themoviedb.org/3/movie/top_rated?api_key=b0d938d735b67d7de27f09ccd5ad60cb&language=en-US'
    },
    {
        title: 'Action Movies',
        fetchUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=28'
    },
    {
        title: 'Comedy Movies',
        fetchUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=35'
    },
    {
        title: 'Horror Movies',
        fetchUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=27'
    },
    {
        title: 'Romance Movies',
        fetchUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=10749'
    },
    {
        title: 'Documentaries',
        fetchUrl: 'https://api.themoviedb.org/3/discover/movie?api_key=b0d938d735b67d7de27f09ccd5ad60cb&with_genres=99'
    }
]
    return (
        <div className= 'homeScreen'>
            < Nav />
            < Banner />
            < Row api= {api[0]} />
            < Row api= {api[1]} />
            < Row api= {api[2]} />
            < Row api= {api[3]} />
            < Row api= {api[4]} />
            < Row api= {api[5]} />
            < Row api= {api[6]} />
        </div>
    )
}

export default HomeScreen
