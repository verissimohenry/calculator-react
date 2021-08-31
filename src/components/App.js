import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './styles.css';

const App = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const handleClick = (buttonName) => {
    const data = calculate(state, buttonName);
    const { total, next, operation } = data;
    setState({
      total,
      next,
      operation,
    });
  };

  const { total, next, operation } = state;
  const S = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  return (
    <>
      <S>
        <h1>React Calculator</h1>
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </S>
    </>
  );
};

export default App;
