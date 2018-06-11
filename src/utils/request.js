import fetch from 'dva/fetch';
import { message } from 'antd';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage(data, url) {
  console.log("parseErrorMessage", data, url);
  const { result } = data;
  if (result !== 'ok' && result != null) {
    //throw new Error(`${result || ''}`);
    message.error(result);
    return { data, error: result };
  } else {
    return { data };
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    },
    credentials: 'include',
    ...options
  });
  checkStatus(response);

  const data = await response.json();
  return parseErrorMessage(data, url);
}
