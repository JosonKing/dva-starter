const data = require('./user.json');

export default {
  'POST /user/getAllGroups.do': (req, res) => {
    res.end(
      JSON.stringify(data.getUserList)
    );
  },
  'POST /user/addUser.do': (req, res) => {
    res.end(
      JSON.stringify(data.getUserList)
    );
  },
  
}