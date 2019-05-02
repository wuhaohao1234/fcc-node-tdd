// example sum => input a, b put a + b

import sum from '../src/sum'

describe('sum', () => {
    test('the sum is defined', () => {
        expect(sum).toBeDefined()
    })
    test('the sum is a function', () => {
        expect(typeof sum).toBe('function')
    })
    test('input 1 , 1 put 2', () => {
        expect(sum(1, 1)).toBe(2)
    })

    test('input 1, 3 put 4', () => {
        expect(sum(1, 3)).toBe(4)
    })
}) 