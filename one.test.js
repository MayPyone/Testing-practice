const data = require('./one.js');
const reverse = require('./reverse.js');
const calculator =require('./cal.js');
const capital = require('./capital.js');
test('the word may should have lenght 3',()=>{
    expect(data('may')).toBe(3);
});
test('the string has more than 10 character',()=>{
    expect(data('Myanmar is in South EAst Asia')).toBe('String has characters more than ten');
});

test('The reverse string of match should be hctam',()=>{
    expect(reverse('match')).toBe('hctam');
});

describe('Calculating', () => {
  const cal= new calculator();
  test('2+3 should be 5',()=>{
    expect(cal.add(2,3)).toBe(5);
});
test('9-4 should be 5',()=>{
    expect(cal.subtract(9,4)).toBe(5);
});
test('12*5 should be 60',()=>{
    expect(cal.multiply(12,5)).toBe(60);
});
});

describe('Test the first capital letter', () => {
  
    test('kind should be Kind',()=>{
        expect(capital("kind")).toBe("Kind");
    });

});