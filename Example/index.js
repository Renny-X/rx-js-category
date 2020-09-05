require('../index')

function testObject() {
  const arr = ['a', { a: 'b', b: undefined }]
  const obj = { a: 'b', b: undefined, c: ['1', '2', null] }
  const obj1 = { d: 'ddddd', e: { f: ['333', null, { j: 'null', k: null }], g: undefined, h: { x: 'xxxx' } } }
  
  // Array
  console.log(arr.rx().isArray())
  console.log(arr.rxarray())

  console.log(obj.rx().isArray())
  console.log(obj.rxarray())
  console.log()

  // Object
  console.log(obj.rx().isObject())
  console.log(obj.rxobject())
  console.log(arr.rx().isObject())
  console.log(arr.rxobject())
  console.log()

  // Merge
  console.log(obj.rx().merge(obj1))
  // console.log(obj.rxmerge(obj1).rxformat())
  // console.log(obj.rxmerge(obj1).rxformat().e.f)

  // Format
  // console.log(obj.rx().format())
  console.log(obj.rxformat())
}

function testString() {
  const pwd = '12sdAc **-_'
  const phone = '18018018018'
  const email = 'xxxx@xx.com'
  const id = '320110199908084325'  // 瞎编的，碰上了请联系我。

  console.log(pwd.rxpassword())
  console.log(phone.rxphone())
  console.log(email.rxemail())
  console.log(id.rxidcard())

  console.log(pwd.rx().password())
  console.log(phone.rx().phone())
  console.log(email.rx().email())
  console.log(id.rx().idcard())
}

testObject()
// testString()
