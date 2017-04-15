import React from 'react';
import ReactDOM from 'react-dom';
import styles from './test.scss';

ReactDOM.render(
  <h1 className={styles.testClass}>Hello</h1>,
  document.getElementById('mount-point'),
);