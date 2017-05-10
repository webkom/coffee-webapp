import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './App.css';
import { getStats, getStatus } from '../../api';
import BarChart from '../../components/BarChart';
import ApiDoc from '../../components/ApiDoc';

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
    } else if (status.time_since.hours === 1) {
      return `Kaffen ble satt på for ${status.time_since.hours} time og ${status.time_since.minutes} minutter siden.`;
    }

    return `Kaffen ble satt på for ${status.time_since.hours} timer og ${status.time_since.minutes} minutter siden.`;
  }

  render() {
    return (
      <Grid fluid className={styles.wrapper}>
        { this.state.status ?
          <h1 className={styles.title}>{this.coffeeStatus()}</h1>
        : null }

        { this.state.stats ?
          <div className={styles.barChartWrapper}>
            <BarChart stats={this.state.stats.stats} />
          </div>
          : null }

        <h1>API</h1>
        <Row>
          <Col xs>
            <ApiDoc
              key="status"
              verb="GET"
              endpoint="/api/status"
              description="Returnerer data om sist gang kaffetrakteren var på."
              example={JSON.stringify({
                coffee: {
                  status: true,
                  last_start: '2012-12-12 12:12',
                  time_since: {
                    hours: 0,
                    minutes: 0,
                  },
                },
              }, null, 2)}
            />
          </Col>
          <Col xs>
            <ApiDoc
              key="stats"
              verb="GET"
              endpoint="/api/stats"
              description="Returnerer statistikk om bruket av kaffetrakteren."
              example={JSON.stringify({
                stats: {
                  '2012-12-12': 3,
                  '2012-12-13': 1,
                  '2012-12-14': 7,
                },
              }, null, 2)}
            />
          </Col>
        </Row>
      </Grid>
    );
  }

}

export default App;
