import calculate from '../logic/calculate';

describe('calculate', () => {
  it('constructs the (total) number as user type a number', () => {
    let data = {
      total: '',
      next: '',
      operation: '',
    };
    data = calculate(data, '1');
    expect(data.total).toBe('1');
    data = calculate(data, '2');
    expect(data.total).toBe('12');
    data = calculate(data, '3');
    expect(data.total).toBe('123');
  });

  it('constructs the (total) number as user type a number', () => {
    let data = {
      total: '345',
      next: '',
      operation: '',
    };
    data = calculate(data, '1');
    expect(data.total).toBe('3451');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = {
      total: '123',
      next: '',
      operation: '+',
    };
    data = calculate(data, '8');
    expect(data.next).toBe('8');
    data = calculate(data, '.');
    expect(data.next).toBe('8.');
    data = calculate(data, '2');
    expect(data.next).toBe('8.2');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = {
      total: '123',
      next: '',
      operation: '',
    };
    data = calculate(data, '+');
    expect(data.operation).toBe('+');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = {
      total: '12',
      next: '3',
      operation: '+',
    };
    data = calculate(data, '=');
    expect(data.total).toBe('15');
  });

  it('constructs the (next)number as you type if you pressed an operation button', () => {
    let data = {
      total: '',
      next: '3',
      operation: '',
    };
    data = calculate(data, '.');
    data = calculate(data, '2');
    expect(data.next).toBe('3.2');
  });

  it('Should return a negative value', () => {
    const result = calculate({ total: '6', next: '10', operation: '+' }, '=');
    expect(result.total * 1).toEqual(16);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a sustrated value', () => {
    const result = calculate({ total: '6', next: '10', operation: '-' }, '=');
    expect(result.total * 1).toEqual(-4);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a multiplied value', () => {
    const result = calculate({ total: '6', next: '10', operation: 'X' }, '=');
    expect(result.total * 1).toEqual(60);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should return a divided value', () => {
    const result = calculate({ total: '6', next: '10', operation: '/' }, '=');
    expect(result.total * 1).toEqual(0.6);
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
  it('Should not return a number when divide by zero', () => {
    const result = calculate({ total: '6', next: '0', operation: '/' }, '=');
    expect(result.total * 1).toEqual(NaN);
    expect(typeof result.total).not.toEqual('number');
    expect(result.next).toEqual(null);
    expect(result.operation).toEqual('=');
  });
});
