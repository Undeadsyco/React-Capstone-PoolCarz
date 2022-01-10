import { useNavigate } from 'react-router-dom';
import PropTypes, { checkPropTypes } from 'prop-types';

import {
  RideList, ListContainer, OptionBtn,
  ListHeaders, ListItems, Row, ItemRow,
} from '../styles';

const RidesList = (props) => {
  const {
    selectedOption, list, setOffer, scrollToDetails,
  } = props;

  const navigate = useNavigate();

  const handleClick = (item) => {
    setOffer(item);
    setTimeout(() => {
      scrollToDetails();
    }, 10);
  };

  return (
    <ListContainer style={selectedOption === 'All_Rides' ? { display: 'block' } : { display: 'none' }}>
      <div>
        <OptionBtn type="button">Show All Rides</OptionBtn>
        <OptionBtn type="button">To InfoSys</OptionBtn>
        <OptionBtn type="button">From InfoSys</OptionBtn>
        <OptionBtn type="button">Others</OptionBtn>
      </div>
      <RideList>
        <Row>
          <ListHeaders>Starting Point</ListHeaders>
          <ListHeaders>End Point</ListHeaders>
          <ListHeaders>Seats Available</ListHeaders>
        </Row>
        {list?.map((item) => (
          <ItemRow onClick={() => handleClick(item)}>
            <ListItems>{item.pickUp}</ListItems>
            <ListItems>{item.destination}</ListItems>
            <ListItems>{item.seatsLeft}</ListItems>
          </ItemRow>
        ))}
      </RideList>
      <div>
        <OptionBtn type="button">Previous</OptionBtn>
        <OptionBtn type="button" onClick={() => navigate('/offer_ride')}>Offer A Ride</OptionBtn>
        <OptionBtn type="button">Next</OptionBtn>
      </div>
    </ListContainer>
  );
};

RidesList.defaultProps = {
  selectedOption: '',
  list: [],
  setOffer: checkPropTypes(),
  scrollToDetails: checkPropTypes(),
};

RidesList.propTypes = {
  selectedOption: PropTypes.string,
  list: PropTypes.array,
  setOffer: PropTypes.func,
  scrollToDetails: PropTypes.func,
};

export default RidesList;
