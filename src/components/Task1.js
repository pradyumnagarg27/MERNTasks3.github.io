import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');
  const wordCount = text.split(/\s+/).filter(word => word !== '').length;

  const styles = {
    wordCounterContainer: {
      fontFamily: 'Arial, sans-serif',
      maxWidth: '400px',
      margin: '0 auto',
    },
    textInput: {
      width: '100%',
      height: '100px',
      fontSize: '16px',
    },
    wordCount: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginTop: '10px',
    },
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={styles.wordCounterContainer}>
      <h1>Word Counter</h1>
      <textarea
        placeholder="Enter your text here..."
        value={text}
        onChange={handleTextChange}
        style={styles.textInput}
      />
      <p style={styles.wordCount}>Word Count: {wordCount}</p>
    </div>
  );
};

export default WordCounter;
