import axios from 'axios';

export default {
  getSearchResults: function(term) {
    axios.get('http://beta.dashmote.com/api/images/', {'gqfts9unAZsBZwkxFmdz'})
  }
};
