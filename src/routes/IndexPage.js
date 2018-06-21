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

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch({ type: 'user/init', payload: null });
  }

  render() {
    return (
      <div className={styles.container}>
        <User />
      </div>
    );
  }
}

export default connect()(IndexPage);
