import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.container}>
      hello
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
