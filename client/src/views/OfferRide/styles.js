import styled from 'styled-components';

export const FormContainer = styled.form`
  width: 60%;
  height: 100%;
  margin: auto;
  border: 4px solid blue;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(12, 1fr);
`;

export const Title = styled.h2`
  padding: 5px 20px;
  margin: 0;
  text-align: left;
  font-weight: 400;
  background-color: blue;
  color: white;
`;

export const InputContainer = styled.label`
  width: 100%;
  padding: 5px 20px;
  grid-row: ${(props) => props.start}/${(props) => props.end};
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
`;

export const InputHeading = styled.h4`
  margin: 0;
  grid-row: 1/2;
  grid-column: 1/2;
  text-align: left;
`;

export const Input = styled.input`
  border-radius: 5px;
  grid-column: 1/3;
  border: 1px solid rgba(0, 0, 0, 0.5);
`;

export const ErrMessage = styled.div`
  color: red;
  grid-row: 1/2;
  grid-column: 2/3;
`;

export const BtnContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: start;
  padding: 0% 20px;
`;

export const Btn = styled.button.attrs(() => ({ tabIndex: 0 }))`
  height: 90%;
  width: 100px;
  border-radius: 10px;
  background-color: blue;
  color: white;
  &:hover {
    background-color: rgb(90, 90, 255);
    color: black;
    cursor: pointer;
  }
`;
