
const listNodeTwoNumber = (arr1, arr2) => {
    if(arr1.length > 3 || arr2.length > 3) {
        return 'the number length > 3'
    }else if (arr1.length < 3 || arr2.length < 3) {
        return 'the number lenght < 3'
    }
    let num1 = arr1[2] + '' + arr1[1] + '' + arr1[0]
    let num2 = arr2[2] + '' + arr2[1] + '' + arr2[0]
    num1 = Number(num1)
    num2 = Number(num2)
    return num1 + num2
}
export default listNodeTwoNumber