import operate from '../logic/operate';

describe('Calculate operations', () => {
  it('Should be a function', () => {
    expect(typeof operate).toEqual('function');
  });
  it('Should sum two numbers', () => {
    const result = operate('5', '1', '+');
    expect(result * 1).toBe(6);
  });
  it('Should subtract two numbers value', () => {
    const result = operate('8', '10', '-');
    expect(result * 1).toEqual(-2);
  });
  it('Should multiply 2 numbers', () => {
    const res = operate('2', '4', '*');
    expect(res * 1).toEqual(8);
  });
  it('Should return an error', () => {
    const result = operate('7', '0', '/');
    expect(result).toEqual('ERROR can\'t divide by 0');
  });
});
