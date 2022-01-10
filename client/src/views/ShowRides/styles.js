import styled from 'styled-components';

export const BodyContainer = styled.div`
  width: 70%;
  height: 100%;
  margin: auto;
  border: 2px solid blue;
  grid-column: 3/11;
  overflow-y: auto;
  border-radius: 5px;
`;

export const Heading = styled.h3`
  background-color: blue;
  color: white;
  margin: 0;
`;

export const Text = styled.p`
  height: 20%;
  padding: 10px 20px;
  margin: 0;
  font-size: 1.12rem;
  font-weight: 500;
`;

export const BtnBox = styled.div`
  height: 40%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  justify-items: center;
  align-items: center;
`;

export const OptionBtn = styled.button`
  width: 150px;
  height: 30px;
  background-color: blue;
  color: white;
  margin: 0 5px;
  border-radius: 10px;
  font-size: large;
  font-weight: 600;
`;

// Rides List Styles
export const ListContainer = styled.div`
  height: 70%;
`;

export const RideList = styled.div`
  width: 90%;
  height: 80%;
  margin: auto;
  padding: 10px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const ItemRow = styled(Row).attrs(() => ({ tabIndex: 0 }))`
  border: 2px solid black;

  &:hover{
    cursor: pointer;
    background-color: rgb(200, 200, 200);
    transition: background-color .5s;
  }
`;

export const ListHeaders = styled.h3`
  margin: 0;
  background-color: blue;
  color: white;
`;

export const ListItems = styled.p`
 margin: 0;
`;

export const OfferContainer = styled.div`
  width: 70%;
  height: 300px;
  border: 2px solid blue;
  margin: 20px auto;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(5, 1fr);
`;

export const OfferRow = styled.div`
  display: grid;
  grid-template-columns: ${(props) => {
    const number = props.rowNumber;
    return `repeat(${number}, 1fr)`;
  }};
  justify-content: center;
  justify-items: center;
  align-items: center;
  text-align: center;
`;

export const OfferHeading = styled.h3`
width: 100%;
  margin: 0;
  font-size: 1.75rem;
  background-color: blue;
  color: white;
  align-self: flex-start;
`;

export const OfferItem = styled.h5`
  margin: 0;
  font-size: 1rem;
`;

export const OfferBtn = styled.button.attrs(() => ({ tabIndex: 0 }))`
  width: 10%;
  &:hover {}
`;
