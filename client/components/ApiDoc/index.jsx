import React from 'react';
import PropTypes from 'prop-types';
import styles from './ApiDoc.css';

const ApiDoc = props => (
  <div className={styles.wrapper}>
    <h3>{props.verb} <a href={`${API_URL}${props.endpoint}`}>{props.endpoint}</a></h3>
    <p>{props.description}</p>
    <p>Eksempel</p>
    <pre>
      {props.example}
    </pre>
  </div>
);

ApiDoc.propTypes = {
  verb: PropTypes.string,
  description: PropTypes.string,
  endpoint: PropTypes.string,
  example: PropTypes.string,
};

export default ApiDoc;
