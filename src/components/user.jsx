import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './user.less';

// const userList = [
//   {
//     "groupId": "55000000000000000070000100003000",
//     "id": "3",
//     "name": "25",
//     "parentId": "1"
//   },
//   {
//     "groupId": "55000000000000000070000200004000",
//     "id": "14",
//     "name": "444ak",
//     "parentId": "12"
//   }
// ]

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: 'ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '组ID',
  dataIndex: 'groupId',
  key: 'groupId',
}];

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { userList } = this.props;
    console.log('userList:', userList);
    return (
      <div className={styles.container}>
        <Table dataSource={userList} columns={columns} />
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
