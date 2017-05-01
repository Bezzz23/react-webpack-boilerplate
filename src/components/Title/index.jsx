import React from 'react';
import title from './styles.scss';

export default class Title extends React.Component {
  render() {
    return (
      <h1 className={title.bold}>Hell</h1>
    );
  }
}
