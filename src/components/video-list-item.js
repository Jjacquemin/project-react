import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

const VideoListItem = props => {
  const {movie} = props
  console.log(movie)
  return (
    <li>
      <img height='100px' width='100px' src={`${IMAGE_BASE_URL}${movie.poster_path}`}/>
      <h5>{ movie.title }</h5>
    </li>
  ) 
}

export default VideoListItem
