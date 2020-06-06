import React from 'react'
const BASE_URL='https://www.youtube.com/embed/'

const Video = ({videoId}) => {
    return(
        <div>
            <iframe title={videoId} src={`${BASE_URL}${videoId}`}/>
        </div>
    )
}

export default Video