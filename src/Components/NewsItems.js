import React, { Component } from 'react'

export class NewsItems extends Component {
    
  render() {
    let {title, description, imgURL, newsURL, publishedAt, author, source} = this.props;
    // let d = new Date(publishedAt);
    // console.log(d);
    // console.log(d.getTime());
    // console.log(d.getDate());
  
    return (
      
        <div className="card my-4" style={{width: '18rem'}}>
        <img src={imgURL} className="card-img-top" alt="..."/>
        <div className="card-body md-3 "><span class="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
    {source}
  </span>
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <div class="card-footer px-0">
              <small class="text">by {author} on {new Date(publishedAt).toGMTString()} <br/> </small>
            </div>
            <a href={newsURL} rel="noreferrer" target="_blank" className="btn btn-primary">See More..</a>
        </div>
        </div>
      
    )
  }
}

export default NewsItems