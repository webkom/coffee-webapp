import React from 'react';
import styles from './App.css';
import { getStats, getStatus } from '../../api';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      status: null,
      stats: null,
    };
  }

  componentDidMount() {
    getStats().then((stats) => {
      this.setState({ stats });
    });
    getStatus().then((status) => {
      this.setState({ status });
    });
  }

  coffeeStatus() {
    if (!this.state.status || this.state.status.coffee.status === 'unknown') {
      return '';
    }

    const status = this.state.status.coffee;

    if (status.time_since.hours < 1) {
      return `Kaffen ble satt på for ${status.time_since.minutes} minutter siden.`;
    }

    return `Kaffen ble satt på for ${status.time_since.hours} timer og ${status.time_since.minutes} minutter siden.`;
  }

  render() {
    return (
      <div className={styles.wrapper}>
        { this.state.status ?
          <h1 className={styles.title}>{this.coffeeStatus()}</h1>
        : null }
      </div>
    );
  }

}

export default App;
