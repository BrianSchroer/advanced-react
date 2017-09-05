import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import debounce from 'lodash.debounce';
import storeProvider from '../storeProvider';

const StyledInput = glamorous.input({
  marginBottom: '1em'
});

export class SearchBar extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };

  state = {
    searchTerm: ''
  };

  doSearch = debounce(() => {
    this.props.store.setSearchTerm(this.state.searchTerm);
  }, 300);

  handleSearch = event => {
    this.setState({ searchTerm: event.target.value }, this.doSearch);
  };

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

export default storeProvider()(SearchBar);
