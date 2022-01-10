/* eslint-disable default-param-last */
const initialState = {
  alert: {
    show: false,
    message: '',
  },
  isLoggedIn: false,
  offers: [],
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ALERT':
      return {
        ...state,
        alert: {
          show: !state.alert.show,
          message: action.data || '',
        },
      };
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    case 'GET_OFFERS':
      return {
        ...state,
        offers: action.data.offers,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
