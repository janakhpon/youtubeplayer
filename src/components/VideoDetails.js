import React from 'react';

const VideoDetails = ({video}) => {

    if(!video){
        return <div>loading....</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return(
        <div>
        <div className="ui embed">
            <iframe src={videoSrc} title={video.snippet.title} />
        </div>
        <div className="ui segment">
            <h4 className="ui header">
            {video.snippet.title}
            </h4>

        </div>
        </div>
    );
}

export default VideoDetails;