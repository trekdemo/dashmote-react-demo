var React = require('react');
var SearchBar = require('./SearchBar');
var SearchResultsGrid = require('./SearchResultsGrid');
var axios = require('axios');

var Main = React.createClass({
  getInitialState: function() {
    return {
      search_term: '',
      results: []
    };
  },

  handleSearch: function(term) {
    this.setState({search_term: term});

    var params = {params: {user_token: 'secret_token', query: term, provider: 'flickr', count: 100}};
    axios.get('http://localhost:3000/api/images', params)
      .then(function (response) {
        this.setState({results: response.data.images});
      }.bind(this))
      .catch(function (response) {
        console.log(response);
        this.setState({results: []})
      });
  },

  render: function() {
    return (
      <div className="main-container">
        <SearchBar search={this.handleSearch} search_term={this.state.search_term} />
        <SearchResultsGrid results={this.state.results} />
      </div>
    )
  }
});

module.exports = Main;
