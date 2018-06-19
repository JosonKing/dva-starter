import React, { Component } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import User from '../components/user';

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  // componentDidMount() {
  //   const { dispatch } = this.props;
  //   dispatch({ type: 'init', payload : null });
  // }

  render() {
    return (
      <div className={styles.container}>
        <User />
      </div>
    );
  }
}

export default IndexPage;
