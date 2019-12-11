/*
 * @Descripttion:
 * @version:
 * @Author: yang_ft
 * @Date: 2019-12-10 09:49:59
 * @github: famensaodiseng
 * @LastEditTime: 2019-12-10 09:51:53
 */
module.exports = {
  devServer: {
    before: require("./mock/index.js")
  }
};
//vue项目中使用mock
