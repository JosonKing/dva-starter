import React, { Component } from 'react';
import { connect } from 'dva';
import { Table } from 'antd';
import styles from './user.less';

const userList = [
  {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000100003000",
    "id": "3",
    "name": "25",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000100004000",
    "id": "4",
    "name": "4444",
    "parentId": "2"
  },
  {
    "groupId": "55000000000000000070000100001000",
    "id": "1",
    "name": "dsfdsg",
    "parentId": "0"
  },
  {
    "groupId": "55000000000000000070000100002000",
    "id": "2",
    "name": "73",
    "parentId": "1"
  },
  {
    "groupId": "55000000000000000070000200001000",
    "id": "11",
    "name": "kdfgak",
    "parentId": "0"
  }, {
    "groupId": "55000000000000000070000200002000",
    "id": "12",
    "name": "73k",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200003000",
    "id": "13",
    "name": "bak",
    "parentId": "11"
  }, {
    "groupId": "55000000000000000070000200004000",
    "id": "14",
    "name": "444ak",
    "parentId": "12"
  }

]
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
    // const { userList } = this.props;
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
