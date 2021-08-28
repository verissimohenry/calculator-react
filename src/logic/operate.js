import Big from 'big.js';

const operate = (previous, next, operation) => {
  const prev = Big(previous);
  const nxt = Big(next);

  if (operation === '/') {
    return nxt !== '0' ? prev.div(nxt) : 'ERROR can\'t divide by 0';
  } if (operation === 'X') {
    return prev.times(nxt);
  } if (operation === '+') {
    return prev.plus(nxt);
  } if (operation === '-') {
    return prev.minus(nxt);
  }
  return 'not valid operation';
};

export default operate;
