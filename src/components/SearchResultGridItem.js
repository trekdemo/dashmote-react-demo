import React from 'react';

var SearchResultGridItem = React.createClass({
  render: function(){
    var thumbnail_url = this.props.image.thumbnail_url;
    var full_url = this.props.image.full_url;
    var style = {'backgroundImage': `url(${thumbnail_url})`};

    return (
      <li className="image" style={style}>
        <span className="buttons">
          <a className="small-btn image-download-btn" title="Download image" href={full_url}>Download</a>
          <a className="small-btn image-share-btn" title="Share image" href={full_url}>Share</a>
          <a className="small-btn image-collect-btn" title="Add to collection" href={full_url}>Add to collection</a>
        </span>
      </li>
    );
  }
});
module.exports = SearchResultGridItem;
