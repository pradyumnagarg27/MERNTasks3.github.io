import React, { useState } from 'react';

const Calculator = () => {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(display));
      } catch (error) {
        setResult('Error');
      }
      setDisplay('');
    } else if (value === 'C') {
      setDisplay('');
      setResult('');
    } else {
      setDisplay(display + value);
    }
  };

  const styles = {
    calculator: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '300px',
      margin: '0 auto',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0',
    },
    display: {
      fontSize: '24px',
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '5px',
      margin: '5px 0',
    },
    button: {
      fontSize: '18px',
      padding: '10px 20px',
      margin: '5px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      cursor: 'pointer',
      backgroundColor: 'lightgray',
    },
  };

  return (
    <div style={styles.calculator}>
      <div style={styles.display}>{display || result}</div>
      <div>
        <button style={styles.button} onClick={() => handleClick('7')}>7</button>
        <button style={styles.button} onClick={() => handleClick('8')}>8</button>
        <button style={styles.button} onClick={() => handleClick('9')}>9</button>
        <button style={styles.button} onClick={() => handleClick('/')}>/</button>
      </div>
      <div>
        <button style={styles.button} onClick={() => handleClick('4')}>4</button>
        <button style={styles.button} onClick={() => handleClick('5')}>5</button>
        <button style={styles.button} onClick={() => handleClick('6')}>6</button>
        <button style={styles.button} onClick={() => handleClick('*')}>*</button>
      </div>
      <div>
        <button style={styles.button} onClick={() => handleClick('1')}>1</button>
        <button style={styles.button} onClick={() => handleClick('2')}>2</button>
        <button style={styles.button} onClick={() => handleClick('3')}>3</button>
        <button style={styles.button} onClick={() => handleClick('-')}>-</button>
      </div>
      <div>
        <button style={styles.button} onClick={() => handleClick('0')}>0</button>
        <button style={styles.button} onClick={() => handleClick('+')}>+</button>
        <button style={styles.button} onClick={() => handleClick('=')}>=</button>
        <button style={styles.button} onClick={() => handleClick('C')}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
