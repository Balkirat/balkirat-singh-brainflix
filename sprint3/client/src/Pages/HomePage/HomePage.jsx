import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../../App";
import VideoList from "../../components/VideoList";
import Video from "../../components/Video";
import HeroVideo from "../../components/Hero";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      sideVideo: [],
      mainVideo: {},
      mainVideoComments: [],
      showMainVideo: false
    };
  }

  handleNewVideo = response => {
    this.setState({
      mainVideo: response.data,
      showMainVideo: true
    });
    window.scrollTo(0, 0);
    this.sortedComments(response);
  };

  sortedComments = response => {
    response.data.comments = response.data.comments.sort(function(a, b) {
      var dateA = a.timestamp,
        dateB = b.timestamp;
      return dateB - dateA;
    });
    this.setState({
      mainVideoComments: response.data.comments
    });
  };

  defaultVideo() {
    axios.get(`http://localhost:8080/videos`).then(response => {
      this.setState({
        sideVideo: response.data
      });
      axios
        .get(`${API_URL}/videos/${response.data[0].id}`)
        .then(this.handleNewVideo);
    });
  }

  filteredVideoList = () => {
    return this.state.sideVideo.filter(
      item => item.id !== this.state.mainVideo.id
    );
  };

  componentDidMount() {
    this.defaultVideo();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id === prevProps.match.params.id) return;
    if (this.props.match.params.id !== undefined) {
      axios
        .get(`${API_URL}/videos/${this.props.match.params.id}`)
        .then(this.handleNewVideo);
    } else {
      axios.get(`${API_URL}/videos/1af0jruup5gu`).then(this.handleNewVideo);
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    let commentObj = {
      name: "nigel",
      comment: event.target.comments.value
    };
    axios.post(`${API_URL}/videos/${this.state.mainVideo.id}/comments`, commentObj)
      .then(response => {
        axios.get(`${API_URL}/videos/${this.state.mainVideo.id}`)
          .then(response => {
            this.sortedComments(response);
          });
      });
      event.target.reset();
  };

  render() {
    return (
      <>
        {this.state.showMainVideo && (
          <HeroVideo heroVideo={this.state.mainVideo} />
        )}
        <div className="desktop__flex">
          {this.state.showMainVideo && (
            <Video
              mainVideo={this.state.mainVideo}
              handleSubmit={this.handleSubmit}
              mainVideoComments={this.state.mainVideoComments}
            />
          )}
          {this.state.showMainVideo && (
            <VideoList videoList={this.filteredVideoList()} />
          )}
        </div>
      </>
    );
  }
}

export default HomePage;
