const IDcard = require('../common/id')

const lengthReg = /^.{6,30}$/
const numberReg = /[0-9]+/
const lowerReg = /[a-z]+/
const upperReg = /[A-Z]+/
const underlineReg = /[_]+/
const spaceReg = /\s+/
const specialReg = /[^0-9a-zA-Z_\s]/g

const phoneReg = /^((13[0-9])|(14[1456789])|(15([012356789]))|(16[2567])|(17[01235678])|(18[0-9])|(19[189]))\d{8}$/
const emailReg = /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/

String.prototype.rx = function () {
  const that = this
  return {
    password: function () {
      return {
        length: lengthReg.test(that),          // 0. length >= 6 && length <= 30
        hasNumber: numberReg.test(that),       // 1. 包含 数字
        hasLower: lowerReg.test(that),         // 2. 包含 小写字母
        hasUpper: upperReg.test(that),         // 3. 包含 大写字母
        hasUnderline: underlineReg.test(that), // 4. 包含 _(下划线)
        hasSpace: spaceReg.test(that),         // 5. 包含 空白字符(空格、回车、制表符等。)
        hasSpecial: specialReg.test(that),     // 6. 包含 特殊字符(非下划线、空白字符) !(_ || ' ')
      }
    },
    phone: function () {
      return phoneReg.test(that)
    },
    email: function () {
      return emailReg.test(that)
    },
    idcard: function () {
      return {
        isValid: IDcard.validate(that),
        sex: IDcard.getSex(that),
        birth: IDcard.getBirth(that),
      }
    },
  }
}

String.prototype.rxpassword = function () {
  return {
    pwdLength: lengthReg.test(this),       // 0. length >= 6 && length <= 30
    hasNumber: numberReg.test(this),       // 1. 包含 数字
    hasLower: lowerReg.test(this),         // 2. 包含 小写字母
    hasUpper: upperReg.test(this),         // 3. 包含 大写字母
    hasUnderline: underlineReg.test(this), // 4. 包含 _(下划线)
    hasSpace: spaceReg.test(this),         // 5. 包含 空白字符(空格、回车、制表符等。)
    hasSpecial: specialReg.test(this),     // 6. 包含 特殊字符(非下划线、空白字符)
  }
}

String.prototype.rxphone = function () {
  return phoneReg.test(this)
}

String.prototype.rxemail = function () {
  return emailReg.test(this)
}

String.prototype.rxidcard = function () {
  return {
    isValid: IDcard.validate(this),
    sex: IDcard.getSex(this),
    birth: IDcard.getBirth(this),
  }
}
