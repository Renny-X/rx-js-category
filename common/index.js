const formatData = (data) => {
  const temp = data
  if (
    Object.prototype.toString.call(temp) === '[object Array]'
    || Object.prototype.toString.call(temp) === '[object Object]'
  ) {
    for (const key in temp) {
      if (temp[key] === null || temp[key] === undefined) {
        temp[key] = ''
      } else {
        temp[key] = formatData(temp[key])
      }
    }
  }
  return temp
}

module.exports = formatData
