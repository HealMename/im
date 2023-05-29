import axios from 'axios';
import qs from 'qs';
const baseURL = 'http://127.0.0.1:8087';  //  测试
// const baseURL = 'http://127.0.0.1:8087';  // 正式

const instance = axios.create({
  baseURL: `${baseURL}`,
});


export function base_login(data: { token: string; }) {
  const options = buildOptions(data, '/user/info/?token='+ data.token, 'GET');
  return instance(options);
}

export async function loginSystemByVerifyCode(loginInfo: any) {
  const options = buildOptions(loginInfo, '/base/v1/auth_users/user_login_code');
  return instance(options);
}

export async function loginSystemByToken(data: any) {
  const options = buildOptions(data, '/base/v1/auth_users/user_login_token');
  return instance(options);
}

export  async function cancellation(data:any) {
  const options = buildOptions(data, '/base/v1/auth_users/user_delete');
  return  instance(options);
}
function buildOptions(data:any, url:string, method?:string) {
  const options:any = {
    method: method || 'POST',
    url,
  };
  if (options.method === 'GET') {
    options.params = data;
  } else {
    options.data = qs.stringify(data);
  }
  return options;
}
