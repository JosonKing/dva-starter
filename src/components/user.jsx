import React, { Component } from 'react';
import { connect } from 'dva';
import { Icon, Modal, Tree, Divider, List, Avatar, Select, Input, TreeSelect, Popconfirm, message } from 'antd';
import styles from './user.less';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div className={styles.container}>
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  const {
    userList,
  } = state.user;

  return {
    userList,
  };
}

export default connect(mapStateToProps)(User);
