import React from 'react';
import SearchResultGridItem from './SearchResultGridItem';

var SearchResultGrid = React.createClass({
  getDefaultProps: function() {
    return {results: []};
  },

  render: function() {
    var images = this.props.results.map(function(image) {
      return <SearchResultGridItem image={image} />
    });
    return (<ul className="image-results">{images}</ul>);
  }
});

module.exports = SearchResultGrid;
