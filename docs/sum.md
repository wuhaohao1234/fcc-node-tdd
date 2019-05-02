# 一个加法函数

最终实现

```
const sum = (a, b) => a + b
```

* 编写测试代码

__test__/sum.test.js

```
// example sum => input a, b put a + b

import sum from '../src/sum'

describe('sum', () => {
    test('the sum is defined', () => {
        expect(sum).toBeDefined()
    })
})
```

测试代码的内容是看sum 是否已经定义

运行

`yarn test`

这个时候必然会报错

* 编写业务代码

src/sum.js
```

const sum = () => {

}
export default sum
```

运行

`yarn test`

编译通过

* 编写测试

```
    test('the sum is a function', () => {
        expect(typeof sum).toBe('function')
    })
```

* 运行

`yarn test`

* 编写测试

```
    test('input 1 , 1 put 2', () => {
        expect(sum(1,1)).toBe(2)
    })
```
* 运行

`yarn test`

报错

* 编写业务代码

```
const sum = () => {
    return 2
}
export default sum
```

* 运行

`yarn test`

 通过

* 编写测试

```
test('input 1, 3 put 4', () => {
    expect(sum(1,3)).toBe(4)
})
```
* 运行

`yarn test`

报错

* 编写业务代码

```
const sum = (a, b) => {
    return a + b
}
export default sum
```
* 运行

`yarn test`

正确