const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const offersModel = require('../models/offers');
const ridesModel = require('../models/rides');

router.get('/', (req, res) => {
  res.send('success')
});

router.post('/signup', async (req, res, next) => {
  const user = await userModel.create({
    username: req.body.username,
    password: req.body.password,
  });
  if (!user) next(new Error('Something went wrong!'));

  res.send(JSON.stringify({ user }))
});

router.post('/login', async (req, res, next) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) next(new Error('User not Found'));
    if (user.password !== req.body.password) next(new Error('Incorrect Password'));

    res.send(JSON.stringify({ user }));
  } catch (error) {
    next(error);
  }
});

router.get('/logout', (req, res, next) => { });

router.get('/show_rides', async (req, res) => {
  const offers = await offersModel.find();
  res.send(JSON.stringify({ offers }))
});

router.post('/book_ride', async (req, res, next) => {
  try {
    const allRides = await ridesModel.find();
    const ride = allRides.filter(item => item.driver.id === req.body.id);
    if (!ride) new Error('No Ride Was Found');
    console.log(ride);
    console.log(allRides)

    // const booking = await ridesModel.updateOne(
    //   { _id: req.body.id },
    //   {
    //     riders: [
    //       ...ride.ridders,
    //       {
    //         id: req.body.user._id,
    //         name: req.body.user.name,
    //         pickUp: req.body.pickup,
    //         destination: req.body.destination
    //       }
    //     ]
    //   }
    // )

    // res.send(JSON.stringify({ booking }))
  } catch (error) {
    next(error);
  }
});

router.post('/cancel_ride', (req, res) => {

});

router.post('/offer_ride', async (req, res, next) => {
  const offer = await offersModel.create({
    name: req.body.name,
    pickUp: req.body.pickup,
    destination: req.body.destination,
    car: req.body.car,
    seatsLeft: req.body.seats,
  })

  if (!offer) next(new Error('something went wrong'));

  const listener = ridesModel.watch();

  listener.on('change', (list) => {
    res.send(JSON.stringify({ list }))
  })

  const driver = await ridesModel.create({
    driver: {
      id: offer._id,
      name: offer.name,
    },
    status: 'open'
  })

  if (!driver) next(new Error('something went wrong'));
});

module.exports = router;