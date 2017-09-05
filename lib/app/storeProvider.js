import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => ({})) => Component => {
  return class extends React.PureComponent {
    static displayName = `${Component.name}(WithStore)`;

    static contextTypes = {
      store: PropTypes.object
    };

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
        this.forceUpdate();
      }
    };

    render() {
      const { store } = this.context;
      return (
        <Component
          {...this.props}
          {...extraProps(store, this.props)}
          store={store}
        />
      );
    }
  };
};

export default storeProvider;
