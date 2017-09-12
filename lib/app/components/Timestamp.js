import React from 'react';
import PropTypes from 'prop-types';
import format from '../../util/format';
import storeProvider from '../storeProvider';

export class Timestamp extends React.PureComponent {
  static propTypes = {
    timestampDisplay: PropTypes.string.isRequired
  };

  render() {
    return <div>{format.dateTime(this.props.timestampDisplay)}</div>;
  }
}

function extraProps(store) {
  return {
    timestampDisplay: format.dateTime(store.getState().timestamp)
  };
}

export default storeProvider(extraProps)(Timestamp);
