import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import User from '../components/user';

function IndexPage() {
  return (
    <div className={styles.container}>
      hello
      <User />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
