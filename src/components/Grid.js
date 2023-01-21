import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


class Gallery extends React.Component {

  state = {
    items: Array.from({ length: 20 }),
    photos: [],
    currentPhotosCount: 20
  };

  fetchMoreData = () => {
    
    const count =  this.state.currentPhotosCount
    const url = `https://jsonplaceholder.typicode.com/photos?_start=${this.state.currentPhotosCount }&_limit=20`;
    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Problem in fetching photo url");
        }
        return res.json();
      })
      .then(data => this.setState({photos: this.state.photos.concat(data)  }) );
  this.setState({ currentPhotosCount: count+20 })   
  };

      
  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos?_limit=20";

    fetch(url)
      .then(res => {
        if (!res.ok) {
          return Error("Problem in fetching photo url");
        }
        return res.json();
      })
      .then(data => this.setState({photos: data }) );
  };

  render() {
    return (
      <>
      
      
      
      
      <div id>


      <InfiniteScroll
          dataLength={this.state.photos.length}
          next={this.fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {this.state.photos.map((photo, index) => (
            <img src={ photo.url } width={300} height={300} key={index}></img>
          ))}
        </InfiniteScroll>

      </div>
      </>
  )
  }

}

export default Gallery;