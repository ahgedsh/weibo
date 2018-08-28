window.api = api;

const APP_KEY  = '6ac538e1737d093a2980cc6c5463fe01d64d33060febee41ea76e24a28cdffeb';
const BASE_API = 'http://mock.biaoyansu.com/api/1/';

function sign (app_key, timestamp) {
  return btoa(app_key + timestamp);
}

function api (url, params) {
  let timestamp = (new Date).getTime();
  let signature = sign(APP_KEY, timestamp);

  let opt = {
    headers : {
      'biao-mock-app-key'   : APP_KEY,
      'biao-mock-timestamp' : timestamp,
      'biao-mock-signature' : signature,
    },
  };

  url = BASE_API + url;
  return axios
    .post(url, params, opt)
    .then(r => {
      return r.data;
    });
};