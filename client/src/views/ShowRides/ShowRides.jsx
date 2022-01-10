/* eslint-disable no-underscore-dangle */
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import RidesList from './components/RidesList';

import {
  BodyContainer, Heading, Text, BtnBox, OptionBtn,
  OfferContainer, OfferRow, OfferHeading, OfferItem, OfferBtn,
} from './styles';

const ShowRides = (props) => {
  const {
    offers, onGetOffers, onBookRide, user,
  } = props;
  const [selectedOption, setOption] = useState('');
  const [list, setList] = useState(offers);
  const [offer, setOffer] = useState(undefined);
  const [pickup, setPickup] = useState(undefined);
  const [destination, setDestination] = useState(undefined);

  const detailsRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    onGetOffers();
  }, [onGetOffers]);

  useEffect(() => {
    setList(offers);
    if (offer) {
      setPickup(offer.pickUp);
      setDestination(offer.destination);
    }
  }, [offers, offer]);

  const scrollToDetails = () => detailsRef.current.scrollIntoView();

  const handleClick = () => onBookRide({
    id: offer._id,
    user,
    pickup,
    destination,
  });

  return (
    <>
      <BodyContainer>
        <Heading>Book a Ride</Heading>
        <Text>
          Pool Carz is an online application which enables users to share rides with others. You can
          either book a ride or offer a ride. Did we mention that this app is advertisement free? To
          add on top of that, it&apos;s also free of charge! So what are you waiting for? Check out
          the rides and start PCing!!
        </Text>
        <BtnBox style={selectedOption ? { display: 'none' } : { display: 'grid' }}>
          <OptionBtn type="button" onClick={() => setOption('All_Rides')}>Show All Rides</OptionBtn>
          <OptionBtn type="button" onClick={() => navigate('/offer_ride')}>Offer A Ride</OptionBtn>
        </BtnBox>
        <RidesList
          scrollToDetails={scrollToDetails}
          setOffer={setOffer}
          list={list}
          selectedOption={selectedOption}
          setOption={setOption}
        />

      </BodyContainer>
      {offer && (
        <OfferContainer ref={detailsRef}>
          <OfferRow rowNumber={1}>
            <OfferHeading>Ride Details</OfferHeading>
          </OfferRow>
          <OfferRow rowNumber={3}>
            <OfferItem>
              Driver&apos;s Name:
              <br />
              {offer.name}
            </OfferItem>
            <OfferItem>
              Drive&apos;s Car:
              <br />
              {offer.car}
            </OfferItem>
            <OfferItem>
              Seats Available:
              <br />
              {offer.seatsLeft}
            </OfferItem>
          </OfferRow>
          <OfferRow rowNumber={2}>
            <OfferItem>
              Leaving:
              <br />
              {offer.pickUp}
            </OfferItem>
            <OfferItem>
              destination:
              <br />
              {offer.destination}
            </OfferItem>
          </OfferRow>
          <OfferRow rowNumber={2}>
            <label htmlFor="pickup">
              Pick Up Location
              <br />
              <select id="pickup" value={pickup} onChange={(e) => setPickup(e.target.value)}>
                <option>Location A</option>
                <option>Location B</option>
                <option>Location C</option>
                <option>Location D</option>
                <option>Location E</option>
                <option>Location F</option>
              </select>
            </label>
            <label htmlFor="destionation">
              Destination
              <br />
              <select id="destionation" value={destination} onChange={(e) => setDestination(e.target.value)}>
                <option>Location A</option>
                <option>Location B</option>
                <option>Location C</option>
                <option>Location D</option>
                <option>Location E</option>
                <option>Location F</option>
              </select>
            </label>
          </OfferRow>
          <OfferRow rowNumber={1}>
            <OfferBtn onClick={handleClick} type="OfferBtn">Book Ride</OfferBtn>
          </OfferRow>
        </OfferContainer>
      )}

    </>
  );
};

ShowRides.defaultProps = {
  offers: [],
  user: [],
  onGetOffers: checkPropTypes(),
  onBookRide: checkPropTypes(),
};

ShowRides.propTypes = {
  offers: PropTypes.array,
  user: PropTypes.object,
  onGetOffers: PropTypes.func,
  onBookRide: PropTypes.func,
};

export default ShowRides;
