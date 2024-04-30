const {capitalize,reverse,calculator,ccipher,analyzeArray} = require('./index')
test('converts hello to Hello',()=>{
    expect(capitalize('hello')).toBe('Hello')
})

test('string should be gnirts',()=>{
    expect(reverse('hello')).toBe('olleh')
})

test('result is',()=>{
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.sub(1,2)).toBe(-1)
    expect(calculator.mul(1,2)).toBe(2)
    expect(calculator.div(6,2)).toBe(3)
})

test('cipher text be like',()=>{
    expect(ccipher('lmnop',2)).toBe('nopqr')
})

test("Analyze 2", () => {
    expect(analyzeArray([1, 8, 3, 6, 2])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 5
    })
})