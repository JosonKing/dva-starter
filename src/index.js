import 'babel-polyfill';
import dva from 'dva';
import { message } from 'antd';
import './index.css';
import createLoading from 'dva-loading';

// 1. Initialize
const app = dva({
  onError(e, dispatch) {
    console.log("error!", e.message);
    message.error(e.message);
  },
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
app.model(require('./models/user').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
