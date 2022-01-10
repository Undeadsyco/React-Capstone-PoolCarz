import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 100%;
  background-color: black;
  color: white;
`;

const Title = styled.h1`
  margin: 0;
  grid-column: 1/4;
  font-size: 2.5rem;
  align-self: center;
`;

const Nav = styled.nav`
  grid-column: 10/13;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
`;

const Btn = styled.button`
  height: 50%;
  width: 80%;
  border-radius: 20px;
`;

const HeadingContainer = styled.div`
  height: 5%;
  background-color: #6e6e6e;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h4`
  margin: 0;
  font-size: 1.5rem;
`;

const Header = () => (
  <>
    <Container>
      <Title>PoolCarz</Title>
      <Nav>
        <Btn type="button"><Link to="/show_rides">Home</Link></Btn>
        <Btn type="button"><Link to="/login">Logout</Link></Btn>
      </Nav>
    </Container>
    <HeadingContainer>
      <Heading>Friends don&apos;t let friends ride alone</Heading>
    </HeadingContainer>
  </>
);

export default Header;
