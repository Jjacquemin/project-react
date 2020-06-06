import React from 'react'
import VideoListItem from '../components/video-list-item'

const VideoList = () => {
  const movies = ['film 1', 'film 2', 'film 3', 'film 4', 'film 5']
  return (
    <div>
      <ul>
        <VideoListItem movie = { movies[0] }/>
        <VideoListItem movie = { movies[1] }/>
        <VideoListItem movie = { movies[2] }/>
        <VideoListItem movie = { movies[3] }/>
        <VideoListItem movie = { movies[4] }/>
      </ul>
    </div>
  )
}

export default VideoList
