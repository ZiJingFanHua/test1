import axios from 'axios'
import qs from 'qs'
// import { Toast } from 'vant'
// 引入基础参数文件 和 baseURL配置文件

import baseParams from './baseParams' // 基本参数，比如一些登录信息之类的参数
import {BASE_URL} from './config' // baseURL 写在config.js 文件中

// 默认的全局配置
axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 60000

// 请求发送之前拦截，进行处理（根据业务需求进行拦截处理）
axios.interceptors.request.use(success => {
  return success
}, error => {
  return PromiseRejectionEvent(error)
})

axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})
// 导出post请求
export function post (url, data, withBaseParams = false) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      url,
      data: withBaseParams ? qs.stringify({...baseParams, data}) : qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
      .then(res => successHandle(res, resolve)) // 将数据处理之后传给页面
      .catch(err => errorHandle(err, reject))
  })
}

// 导出 get 请求
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url,
      params,
      headers: {}
    })
      .then(res => successHandle(res, resolve))
      .catch(err => errorHandle(err, reject))
  })
}
// then处理执行了successHandle
function successHandle (res, resolve) {
  // if (res.success && res.errorCode === '60000') {
  //   resolve(res)
  // } else {
  //   // 弹出toast报错
  //   // Toast ({
  //   //   message: data.msg,
  //   //   duration: 2000
  //   // })
  //   console.log(res.msg)
  // }
  resolve(res)
}
// catch处理执行了errorHandle
function errorHandle (err, reject) {
  reject(err)
}
