import { Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ isLoggedIn }) => (
  isLoggedIn ? <Outlet /> : <Navigate to="/login" />
);

PrivateRoute.defaultProps = {
  isLoggedIn: false,
};

PrivateRoute.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default PrivateRoute;
