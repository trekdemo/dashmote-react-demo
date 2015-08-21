var React = require('react');

var SearchBar = React.createClass({
  getDefaultProps: function() {
    return {search_term: ''};
  },

  handleSearch: function(event) {
    this.props.search(this.refs.search_term.getDOMNode().value);
    event.preventDefault();
  },

  render: function() {
    return (
      <div className="search-menu">
        <form onSubmit={this.handleSearch}>
          <input ref="search_term"
                 className="search-input"
                 placeholder="Search for images..."
                 onBlur={this.handleSearch} />
        </form>
      </div>
    );
  }
})

module.exports = SearchBar;
