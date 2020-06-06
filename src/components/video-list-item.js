import React from 'react'

const VideoListItem = props => {
  const {movie} = props
  console.log(movie)
  return <li>{ movie.title }</li>
}

export default VideoListItem
