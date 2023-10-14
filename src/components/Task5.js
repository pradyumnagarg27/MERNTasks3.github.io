import React, { useState } from 'react';
import styled from 'styled-components';

const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (birthdate) {
      const birthdateTimestamp = new Date(birthdate).getTime();
      const now = Date.now();
      const ageInMilliseconds = now - birthdateTimestamp;
      const ageDate = new Date(ageInMilliseconds);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    }
  };

  return (
    <Container>
      <h1>Age Calculator</h1>
      <InputContainer>
        <label>Enter your birthdate:</label>
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </InputContainer>
      {age !== null && <Result>Your age is {age} years.</Result>}
    </Container>
  );
};

const Container = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  margin: 20px 0;
  label {
    display: block;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    display: block;
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
`;

const Result = styled.p`
  font-size: 18px;
  font-weight: bold;
  background-color: #e7e7e7;
  padding: 10px;
  border-radius: 5px;
`;

export default AgeCalculator;
