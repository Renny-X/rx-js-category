# rx-js-category

### Introduce
* JavaScript func Category

### Install
```
npm i --save rx-js-category
```
Then import in your entry file

```
import 'rx-js-category'			// for ES6
require('rx-js-category')		// for ES5
```

### Usage
For avoid method name conflicts, use 'rx' as prefix, or use .rx() directly

-
#### String Category
```
const pwd = '12sdAc **-_'
const phone = '18018018018'
const email = 'xxxx@xx.com'
const id = '320110199908084325'  // Fake ID for Chinese
```

* pwd.rxpassword() || pwd.rx().password()

```
{
  pwdLength: true,  // length >= 6
  hasNumber: true,
  hasLower: true,
  hasUpper: true,
  hasUnderline: true,
  hasSpace: true,
  hasSpecial: true
}
```

* phone.rxphone() || phone.rx().phone()

```
true
```

* email.rxemail() || email.rx().email()

```
true
```

* id.rxidcard() || id.rx().idcard()

```
{
  isValid: true,
  sex: 0,
  birth: '1999-08-08'
}
```
-

#### Object Category
```
const arr = ['a', { a: 'b', b: undefined }]
const obj = {
  a: 'b',
  b: undefined,
  c: ['1', '2', null]
}
const obj1 = {
  d: 'ddddd',
  e: {
    f: ['333', null, { j: 'null', k: null }],
    g: undefined,
    h: { x: 'xxxx' }
  }
}
```

* arr.rxarray() || arr.rx().isArray()

```
true
```

* obj.rxobject() || obj.rx().isObject()

```
true
```

* obj.rxmerge(obj1) || obj.rx().merge(obj1)

equal to Object.assign(obj, obj1)

```
{
  a: 'b',
  b: undefined,
  c: [ '1', '2', null ],
  d: 'ddddd',
  e: { f: [ '333', null, [Object] ], g: undefined, h: { x: 'xxxx' } }
}
```

* obj.rxformat() || obj.rx().format()

replace [undefined, null, ...] with ''

```
{
  a: 'b',
  b: '',
  c: [ '1', '2', '' ],
  d: 'ddddd',
  e: { f: [ '333', '', [Object] ], g: '', h: { x: 'xxxx' } }
}
```

-
### Donate
[Click Here && Thanks for Donate](https://github.com/Renny-X/donate)

### Contribute
1.  Fork
2.  New Branch Feat_xxx
3.  Commit
4.  New Pull Request
