import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';

import actions from './actions/actions';

import PrivateRoute from './components/PrivateRoute';
import AlertView from './components/AlertView';
import Login from './views/login/Login';
import Home from './views/Home/Home';

function App(props) {
  return (
    <div className="App">
      <AlertView {...props} />
      <Routes>
        <Route path="/login" element={<Login {...props} />} />
        <Route path="/" element={<PrivateRoute {...props} />}>
          <Route path="/*" element={<Home {...props} />} />
        </Route>
      </Routes>
    </div>
  );
}

const mapStateToProps = (state) => ({
  alert: state.alert,
  isLoggedIn: state.isLoggedIn,
  user: state.user,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => {
  const {
    login, offerRide, getOffers, boodRide,
  } = actions;
  return {
    onLogin: (body) => login(body),
    onGetOffers: () => getOffers().then((data) => dispatch({ type: 'GET_OFFERS', data })),
    onOfferRide: (body) => offerRide(body),
    onBookRide: (body) => boodRide(body),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
