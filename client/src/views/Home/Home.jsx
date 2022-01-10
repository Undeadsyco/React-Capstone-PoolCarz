import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ShowRides from '../ShowRides/ShowRides';
import OfferRide from '../OfferRide/OfferRide';

const Body = styled.main`
  height: 75%;
  overflow-y: auto;
`;

const Home = (props) => (
  <>
    <Header />
    <Body>
      <Routes>
        <Route path="/show_rides" element={<ShowRides {...props} />} />
        <Route path="/offer_ride" element={<OfferRide {...props} />} />
        <Route path="/rider?list" element={undefined} />
      </Routes>
    </Body>
    <Footer />
  </>
);

export default Home;
