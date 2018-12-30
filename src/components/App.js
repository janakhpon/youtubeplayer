import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    state = { videos: [], selectedVideo: null }

    componentDidMount(){
        this.onTermSubmit('lamborghini');
    }


    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({
             videos: response.data.items,
             selectedVideo:response.data.items[0]
             })
        
    };


    onVideoSelect = video => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            <div className="ui container">
             <SearchBar onFormSubmit={this.onTermSubmit} />

                <div className="ui grid">

                    <div className="ui row">
                    <div className="ten wide column">
                    <VideoDetails video={this.state.selectedVideo} />
                    </div>
                    <div className="six wide column">
                    <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </div>
                       

                    </div>
                </div>
               

            </div>
        );
    }
}

export default App;