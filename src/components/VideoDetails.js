import React from 'react';
import './VideoDetails.css'



const VideoDetails = (props) => {
    if (!props.video) {
        return <div>Loading</div>
    }

    const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`

    return (
        <div>
            <div className="card my-3">
                <iframe title="video player" frameborder="0"  src={videoSrc} width="560" height="315" />  
            </div>
            <div className="card my-3" >     
                <div className="card-body">
                    <div className="card-title">
                        <h5>{props.video.snippet.title}</h5>
                    </div>
                    <div className="card-text">
                        {props.video.snippet.description} 
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VideoDetails;