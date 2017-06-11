import convertMark from './../convertMark';

const testFunc = (inputValue, result) => {
  it(`If mark = ${inputValue}, return ${result}`, () => {
    expect(convertMark(inputValue)).toEqual(result);
  });
};

describe('services.convertMark', () => {
  let result = 100;
  for(let inputVal = 1; inputVal < 2; inputVal += 0.1) {
    testFunc(inputVal.toFixed(1), 100);
  }
  for(let inputVal = 2; inputVal <= 11.9; inputVal += 0.1) {
    testFunc(inputVal.toFixed(1), result);
    result += 1;
  }
  testFunc(12, 200);
});