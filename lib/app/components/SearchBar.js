import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import debounce from 'lodash.debounce';

const StyledInput = glamorous.input({
  marginBottom: '1em'
});

export default class SearchBar extends React.Component {

  static propTypes = {
    doSearch: PropTypes.func.isRequired
  }

  state = {
    searchTerm: ''
  }

  doSearch = debounce(() => { this.props.doSearch(this.state.searchTerm); }, 300);

  handleSearch = (event) => {
    this.setState({searchTerm: event.target.value}, this.doSearch);
  }

  render() {
    return (
      <StyledInput
        type="search"
        placeholder="Enter search term"
        value={this.state.searchTerm}
        onChange={this.handleSearch}
      />
    );
  }
}