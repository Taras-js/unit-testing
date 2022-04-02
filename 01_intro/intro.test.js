const {sum} = require('./intro')

test('Sum should return sum of two values', () => {
    expect(sum(1,3)).toBe(4)
    expect(sum(1,3)).toEqual(4)

})
test('Sum should return value correctly comparing to other', () => {
    expect(sum(2,3)).toBeGreaterThan(4)
})
