import React, { Component } from 'react';

class NewsItem extends Component {
  render() {
    const { title2, desc, url, newsUrl } = this.props;
    return (
      <div className="card newsDiv" style={{ width: "18rem" }}>
        <img src={url} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title2}</h5>
          <p className="card-text">{desc}...</p>
          <a href={newsUrl} target='_blank' className="btn btn-primary">Read more</a>
        </div>
      </div>
    ); 
  }
}

export default NewsItem;
