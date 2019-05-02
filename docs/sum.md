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