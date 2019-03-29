import React from 'react';
import './VideoItem.css';


class VideoItem extends React.Component {


    onCardClick = () => {
        this.props.onVideoSelect(this.props.video);
    }

    render() {
        return (
        <div className="video-item">    
            <div onClick={this.onCardClick} className="card my-3">
                        <div className="card-img-top">
                            <img 
                            className="img-fluid" 
                            src={this.props.video.snippet.thumbnails.medium.url}
                            alt={this.props.video.snippet.description} /> 
                        </div>

                        <div className="card-body">
                            <div className="card-title">
                                {this.props.video.snippet.title}
                            </div>
                        </div>    
            </div>
        </div>
        )
    }
    
}


export default VideoItem;