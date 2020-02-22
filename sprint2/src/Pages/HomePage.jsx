import React, { Component } from "react";
import axios from "axios";
import { API_URL } from "../App";
import VideoList from "../components/VideoList/index";
import Video from "../components/Video/index";
import HeroVideo from "../components/Hero/Hero";

const apiKey = "2ae78d53-3395-4750-bd93-293f82257824";
// import "../styles.scss";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      sideVideo: [],
      mainVideo: {},
      showMainVideo: false
    };
  }

  defaultVideo() {
    axios.get(`${API_URL}/videos?api_key=${apiKey}`).then(response => {
      console.log(response.data);
      this.setState({
        sideVideo: response.data
      });
      axios
        .get(`${API_URL}/videos/${response.data[0].id}?api_key=${apiKey}`)
        .then(response => {
          console.log("In HomePAge", response.data);
          this.setState({
            mainVideo: response.data,
            showMainVideo: true
          });
        });
    });
  }

  componentDidMount() {
    this.defaultVideo();
  }

  componentDidUpdate(prevProps) {
    console.log("this is Previsos :", prevProps);

    if (this.props.match.params.id !== prevProps.match.params.id) {
      if (this.props.match.params.id !== undefined) {
        console.log("in if");
        axios
          .get(
            `${API_URL}/videos/${this.props.match.params.id}?api_key=${apiKey}`
          )
          .then(response => {
            console.log("In HomePAge", response.data);
            this.setState({
              mainVideo: response.data
            });
          });
      } else {
        console.log("in else");
        axios
          .get(`${API_URL}/videos/1af0jruup5gu?api_key=${apiKey}`)
          .then(response => {
            console.log("In HomePAge", response.data);
            this.setState({
              mainVideo: response.data
            });
          });
      }
    }
  }
  filteredVideoList = () => {
    return this.state.sideVideo.filter(
      item => item.id !== this.state.mainVideo.id
    );
  };

  render() {
    console.log("to check props.param", this.props.match.params);
    return (
      <>
        {this.state.showMainVideo && (
          <HeroVideo heroVideo={this.state.mainVideo} />
        )}
        <div className="desktop__flex">
          {this.state.showMainVideo && (
            <Video mainVideo={this.state.mainVideo} />
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
