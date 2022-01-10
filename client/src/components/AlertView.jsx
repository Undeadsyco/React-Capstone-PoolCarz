/* eslint-disable react/forbid-prop-types */
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  z-index: 10;
  width: 40vw;
  height: 50vh;
  transform: translate(70%, 50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: 5px solid black;
`;

const Alert = styled.h3``;

const AlertView = ({ alert }) => {
  const { show, message } = alert;

  const dispatch = useDispatch();
  const closeAlert = () => {
    dispatch({ type: 'ALERT' });
  };

  return (
    <Container style={show ? { display: 'block' } : { display: 'none' }}>
      <Alert>{message}</Alert>
      <button onClick={() => closeAlert()} type="button">Close</button>
    </Container>
  );
};

AlertView.defaultProps = {
  alert: {},
};

AlertView.propTypes = {
  alert: PropTypes.object,
};

export default AlertView;
