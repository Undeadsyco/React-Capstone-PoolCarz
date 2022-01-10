import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
`;

export const Title = styled.h2`
  grid-column: 2/6;
  margin: 0;
  font-size: 2.25rem;
  align-self: center;
`;

export const Form = styled.form`
  box-sizing: inherit;
  grid-column: 2/6;
  grid-row: 2/6;
  border: 2px solid black;
  border-radius: 50px;
  height: 100%;
`;

export const Heading = styled.h4`
  margin: 0;
  background-color: rgb(110, 110, 255);
  height: 15%;
  border-top-left-radius: 47px;
  border-top-right-radius: 47px;
  font-size: 1.35rem;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
  align-items: center;
  height: 25%;
`;

export const Label = styled.label`
  font-size: 1.5rem;
  margin-right: 15px;
  justify-self: end;
`;

export const Input = styled.input`
  height: 25px;
  width: 50%;
`;

export const InputErrorContainer = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
  color: red;
  grid-column: 1/3;
`;

export const BtnBox = styled.div`
  height: 15%;
`;

export const Btn = styled.button``;

export const ErrorContainer = styled.div`
  font-weight: bold;
  font-size: 1.35rem;
  color: red;
  height: 15%;
`;
