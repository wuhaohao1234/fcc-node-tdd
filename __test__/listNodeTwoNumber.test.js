// example listNodeTwoNumber
/** 
 * 需求描述
 * 342 + 465 = 807
 * 编写一个函数将两个数分别拆分为数组,例如342拆分为[2, 4, 3]
*/

import ListNode from '../src/ListNode'
import listNodeTwoNumber from '../src/ListNodeTwoNumber';
describe('ListNode', () => {
    test('input 342 put [2, 4, 3]', () => {
        expect(ListNode(342)).toEqual([2, 4, 3])
    })
    test('input 465 put [564]', () => {
        expect(ListNode(465)).toEqual([5, 6, 4])
    })
    test('input 1000 put the number lenght > 999', () => {
        expect(ListNode(10000)).toEqual('the number length > 999')
    })
    // console.log(ListNodeTwoNumber)
    // console.log('------------------------------------------')
})

describe('listNodeTwoNumber', () => {
    test('listNodeTwoNumber input listNode put number', () => {
        expect(listNodeTwoNumber([2, 4, 3], [5, 6, 4])).toEqual(807)
    })
})