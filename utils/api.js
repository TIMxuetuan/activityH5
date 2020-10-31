var { _CONFIG } = require("../config.js");
const request = require('../utils/util');

//测试用于本地调试开发
let ceshi = {
  //判断用户信息是否获取
  userIf(data, jiamiData) {
    return request._post("/elevenUser", data, jiamiData, 2)
  },
}
console.log(ceshi)

//正式用于服务器发布
let fabu = {
  //判断用户信息是否获取
  userIf(data, jiamiData) {
    return request._post(`${_CONFIG.api}/Eleven/elevenUser`, data, jiamiData,2); //服务器需要的ip
  },

  //签到
  signIn(data, jiamiData) {
    return request._post(`${_CONFIG.api}/Eleven/signIn`, data, jiamiData,2);
  },

  //优惠券列表
  coupon(data, jiamiData) {
    return request._post(`${_CONFIG.api}/Eleven/coupon`, data, jiamiData,2);
  },

  //领取优惠券
  couponLq(data, jiamiData) {
    return request._post(`${_CONFIG.api}/Eleven/couponLq`, data, jiamiData,2);
  },

  //兑换抽奖
  lottery(data, jiamiData) {
    return request._post(`${_CONFIG.api}/Eleven/lottery`, data, jiamiData,2);
  },

  //领取兑换优惠券记录
  couponLqjl(data, jiamiData) {
    return request._post(`${_CONFIG.api}/Eleven/couponLqjl`, data, jiamiData,2);
  },
}

//测试api：ceshi ；正式api：fabu
const Services = fabu


module.exports = Services