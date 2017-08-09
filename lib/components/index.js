import React from 'react';
import ReactDOM from 'react-dom';

export default class App extends React.Component {
  state = {
    answer: 42
  };

  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  asyncFunc = () => {
    return Promise.resolve(37);
  };

  render() {
    return <h2>Hello, Class Component! -- {this.state.answer}</h2>;
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);