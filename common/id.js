// 长度 格式校验
const checkLength = (card) => {
  const reg = /(^\d{17}(\d|X|x)$)/
  return reg.test(card)
}

// 15位转18位
const changeCard = (card) => {
  if (!checkLength(card)) {
    return ''
  }
  if (card.length === 18) {
    return card
  }
  const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let cardTemp = 0
  card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6)
  for (let i = 0; i < 17; i++) {
    cardTemp += card.substr(i, 1) * arrInt[i]
  }
  card += arrCh[cardTemp % 11]
  return card
}

// 校验位检测
const checkParity = (card) => {
  card = changeCard(card)
  if (card.length !== 18) {
    return false
  }
  const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  let cardTemp = 0
  for (let i = 0; i < 17; i++) {
    cardTemp += card.substr(i, 1) * arrInt[i]
  }
  return arrCh[cardTemp % 11] === card.substr(17, 1).toLocaleUpperCase()
}

// 校验身份证号
function validate(card) {
  return checkParity(card)
}

// 获取性别 1. 男性、0. 女性
function getSex(card) {
  if (!checkLength(card)) {
    return 1
  }
  card = card.substr(16, 1)
  return card % 2
}

// 获取生日信息
function getBirth(card, seprate) {
  if (!checkLength(card)) {
    return ''
  }
  seprate = seprate || '-'
  card = card.substr(6, 8)
  card = card.substr(0, 4) + seprate + card.substr(4, 2) + seprate + card.substr(6, 2)
  return card
}

function getFullCard(card) {
  return changeCard(card)
}

module.exports = {
  validate, getSex, getBirth, getFullCard,
}
