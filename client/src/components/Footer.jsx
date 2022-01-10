import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdFacebook } from 'react-icons/md';
import { BsTwitter } from 'react-icons/bs';

const Container = styled.footer`
  height: 10%;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 125px;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`;

const Footer = () => (
  <Container>
    <p>Terms & conditions</p>
    <p>Copyright &copy; UI & Markup Team, InfoSys Limited</p>
    <IconContainer>
      <MdEmail size={25} />
      <BsTwitter size={25} />
      <MdFacebook size={25} />
    </IconContainer>
  </Container>
);

export default Footer;
