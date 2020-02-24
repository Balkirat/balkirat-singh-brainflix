import React, { Component } from "react";
import "../VideoList/styles.scss";
import { Link } from "react-router-dom";

class VideoList extends Component {
  render(props) {
    return (
      <aside className="sidevideo">
        <h2 className="sidevideo__header">Next Video</h2>
        {this.props.videoList.map(list => (
          <Link style={{ textDecoration: 'none' }} to={`/videos/${list.id}`} key={list.id}>          
            <div className="sidevideo__container">         
              <img src={list.image} alt="thumbnail of side videos" />
              <div>
                <p className="sidevideo__ellipsis">{list.title}</p>
                <p className="sidevideo__channel">{list.channel}</p>
              </div>
            </div>
          </Link>
        ))}       
      </aside>   
    );
  }
}

export default VideoList;
