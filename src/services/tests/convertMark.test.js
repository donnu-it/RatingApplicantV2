import convertMark from './../convertMark';

const testFunc = (inputValue, result) => {
  it(`If mark = ${inputValue}, return ${result}`, () => {
    expect(convertMark(inputValue)).toEqual(result);
  });
};

describe('services.convertMark', () => {
  testFunc(1, 100);
  testFunc(2, 100);
});