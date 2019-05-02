
const ListNode = (num) => {
    if (num > 999) {
        return 'the number length > 999'
    }
    let arr = []
    arr = [num % 10, Math.floor((num % 100) / 10), Math.floor(num / 100)]
    return arr
}
export default ListNode