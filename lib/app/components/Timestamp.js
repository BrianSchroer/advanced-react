import React from 'react';
import PropTypes from 'prop-types';
import format from '../../util/format';
import storeProvider from '../storeProvider';

export class Timestamp extends React.Component {
  static propTypes = {
    timestamp: PropTypes.string.isRequired
  };

  render() {
    return <div>{this.props.timestamp}</div>;
  }
}

function extraProps(store) {
  return {
    timestamp: format.dateTime(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
