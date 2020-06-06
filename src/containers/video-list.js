import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = () => {
  const movies = ['film 1', 'film 2', 'film 3', 'film 4', 'film 5']
  return (
    <div>
      <ul>
        { movies.map(movie => {
          return <VideoListItem key = { movie } movie = { movie }/>
        })}
      </ul>
    </div>
  )
}

export default VideoList
