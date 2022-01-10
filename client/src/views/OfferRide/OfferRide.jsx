/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes, { checkPropTypes } from 'prop-types';

import {
  FormContainer, Title, InputContainer, BtnContainer,
  InputHeading, Input, ErrMessage, Btn,
} from './styles';

const validation = yup.object({
  name: yup.string().required('Please enter your name'),
  pickup: yup.string().required('please Enter Your starting Location'),
  destination: yup.string().required('Please Enter Your Destionation'),
  car: yup.string().required("Please Specify Which Kind Of Car You're Driving"),
  seats: yup.number().required('Please Enter The Number Of Steats Available').min(1).max(8),
});

const OfferRide = ({ onOfferRide }) => {
  const [successful, setSuccess] = useState('');
  const navigate = useNavigate();
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: '',
      pickup: '',
      destination: '',
      car: '',
      seats: undefined,
    },
    onSubmit: (values) => {
      onOfferRide(values).then((res) => {
        if (res.data) {
          setSuccess('Added Successfully');
        }

        setTimeout(() => {
          navigate('/rider_list');
        }, 3000);
      });
    },
  });

  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Title>Car Ride Registration Form</Title>
      <InputContainer start={2} end={4} htmlFor="name">
        <InputHeading>Name:</InputHeading>
        {formik.errors.name && formik.touched.name
          && <ErrMessage>{formik.errors.name}</ErrMessage>}
        <Input
          type="text"
          id="name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer start={4} end={6} htmlFor="pickup">
        <InputHeading>Start Location:</InputHeading>
        {formik.errors.pickup && formik.touched.pickup
          && <ErrMessage>{formik.errors.pickup}</ErrMessage>}
        <Input
          type="text"
          id="pickup"
          name="pickup"
          value={formik.values.pickup}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer start={6} end={8} htmlFor="destination">
        <InputHeading>Destination:</InputHeading>
        {formik.errors.destination && formik.touched.destination
          && <ErrMessage>{formik.errors.destination}</ErrMessage>}
        <Input
          type="text"
          id="destination"
          name="destination"
          value={formik.values.destination}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer start={8} end={10} htmlFor="car">
        <InputHeading>Car:</InputHeading>
        {formik.errors.car && formik.touched.car
          && <ErrMessage>{formik.errors.car}</ErrMessage>}
        <Input
          type="text"
          id="car"
          name="car"
          value={formik.values.car}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <InputContainer start={10} end={12} htmlFor="seats">
        <InputHeading>Seats Available:</InputHeading>
        {formik.errors.seats && formik.touched.seats
          && <ErrMessage>{formik.errors.seats}</ErrMessage>}
        <Input
          type="text"
          id="seats"
          name="seats"
          value={formik.values.seats}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </InputContainer>
      <BtnContainer>
        <Btn typr="submit">Submit</Btn>
        {formik.errors.form && <div>{formik.errors.from}</div>}
        {successful && <div>{successful}</div>}
      </BtnContainer>
    </FormContainer>
  );
};

OfferRide.defaultProps = {
  onOfferRide: checkPropTypes(),
};

OfferRide.propTypes = {
  onOfferRide: PropTypes.func,
};

export default OfferRide;
