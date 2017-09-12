import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}(WithStore)`;

    static contextTypes = {
      store: PropTypes.object
    };

    // eslint-disable-next-line react/sort-comp
    usedState = () => {
      return extraProps(this.context.store, this.props);
    };

    state = this.usedState();

    componentDidMount() {
      const { store } = this.context;
      this.subscriptionId = store.subscribe(this.onStoreChange);
    }

    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.usedState());
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.usedState()}
          store={this.context.store}
        />
      );
    }
  };
};

export default storeProvider;
