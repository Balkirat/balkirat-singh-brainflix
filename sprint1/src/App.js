import React, { Component } from "react";
import Header from "./components/Header/header";
import thumbnail00 from "./assets/Images/video-list-0.jpg";
import VideoC from './components/Video/index';
import VideoList from './components/VideoList/index'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainVideo: {
        id: "0",
        title: "BMX Rampage: 2018 Highlights",
        description:
          "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions ade it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
        channel: "By Red Cow",
        image: { thumbnail00 },
        views: "1,001,023",
        likes: "110,985",
        duration: "0.42",
        video: "type of <string>",
        timestamp: 12 / 18 / 2018,
        comments: [
          {
            name: "Micheal Lyon",
            timeStamp: "12/18/2018",
            comment:
              "They BLEW the ROOF off at their last show, once everyone startedfiguring out they were going. This is still simply the greatest opening of aconcert I have EVER witnessed."
          },
          {
            name: "Gary Wong",
            timeStamp: "12/12/2018",
            comment:
              "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
          },
          {
            name: "Theodore Duncan",
            timeStamp: "11/15/2018",
            comment:
              "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
          }
        ]
      }
    };
  }

  render() {
    console.log(this.state);
    return <div>
      <Header />
      <VideoC idProp = {this.state.mainVideo.id}/>
      <VideoList />

    </div>;
  }
}

export default App;
