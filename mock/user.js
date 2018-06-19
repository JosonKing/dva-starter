const data = require('./user.json');

export default {
  
  'POST /user/getUserList.do': (req, res) => {
    res.end(
      JSON.stringify(data.getUserList)
    );
  }
}