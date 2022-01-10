import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const actions = {
  login: async (body) => {
    const req = await axios.post(`${baseUrl}/login`, body);
    const res = await req.data;
    console.log(res);
    return res;
  },
  getOffers: async () => {
    const req = await axios.get(`${baseUrl}/show_rides`);
    const res = await req.data;
    console.log(res);
    return res;
  },
  offerRide: async (body) => {
    const req = await axios.post(`${baseUrl}/offer_ride`, body);
    const res = await req.data;
    console.log(res);
    return res;
  },
  boodRide: async (body) => {
    console.log(body);
    const {
      id, user, pickup, destination,
    } = body;
    const req = axios.post(`${baseUrl}/book_ride`, {
      id,
      user,
      pickup,
      destination,
    });
    const res = await (await req).data;
    console.log(res);
    return res;
  },
};

export default actions;
