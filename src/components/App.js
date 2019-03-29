import React from 'react';
import SearchBar from './SearchBar'
import Youtube from '../apis/Youtube'
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    };

    componentDidMount() {
        this.onTermSubmit('bleach');
    }


    onTermSubmit = async (term) => {
        const response = await Youtube.get('/search',{
            params:{
                q: term
            }
        })

        console.log(response);

        this.setState({videos:response.data.items , selectedVideo: response.data.items[0]})
    }


    onVideoSelect = (video) =>{
        this.setState({selectedVideo : video})
        console.log(this.state.selectedVideo)
    }

    render(){
        return(
            <div className="container my-5"> 
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <div className="row">
                    <div className="col-7">
                        <VideoDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="col-5">
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>    
                </div>
            </div>
        )
    }
}

export default App