const formatData = require('../common')

Object.defineProperty(Object.prototype, 'rx', { value: function (v) {
  const that = this
  return {
    isObject: function () {
      return Object.prototype.toString.call(that || v) === '[object Object]'
    },
    isArray: function () {
      return Object.prototype.toString.call(that || v) === '[object Array]'
    },
    format: function () {
      return formatData(that || v)
    },
    merge: function (...args) {
      return Object.assign(that, v, ...args)
    },
  }
} })

Object.defineProperty(Object.prototype, 'rxobject', { value: function (v) {
  return Object.prototype.toString.call(this || v) === '[object Object]'
} })

Object.defineProperty(Object.prototype, 'rxarray', { value: function (v) {
  return Object.prototype.toString.call(this || v) === '[object Array]'
} })

Object.defineProperty(Object.prototype, 'rxformat', { value: function (v) {
  return formatData(this || v)
} })

Object.defineProperty(Object.prototype, 'rxmerge', { value: function (v, ...args) {
  return Object.assign(this, v, ...args)
} })
