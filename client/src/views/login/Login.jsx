/* eslint-disable jsx-a11y/label-has-associated-control */
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PropTypes, { checkPropTypes } from 'prop-types';
import { useFormik } from 'formik';
import * as yup from 'yup';

import {
  Container, Title, Form, Heading, InputContainer, Label,
  Input, ErrorContainer, BtnBox, Btn, InputErrorContainer,
} from './styles';

const validation = yup.object({
  username: yup.string().required().min(5),
  password: yup.string().required().min(8),
});

const Login = ({ onLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values, actions) => {
      const res = await onLogin(values);
      if (res.status === 500) {
        actions.setFieldError('login', res.error);
      }
      if (res.user) {
        dispatch({ type: 'ALERT', data: 'Login Was Successful!' });
        dispatch({ type: 'LOGIN', data: res.user });
        navigate('/show_rides');
        actions.resetForm();
      }
    },
  });

  return (
    <Container>
      <Title>PoolCarz</Title>
      <Form onSubmit={formik.handleSubmit}>
        <Heading>Login</Heading>
        <InputContainer>
          <Label htmlFor="username">Username:</Label>
          <Input
            id="username"
            name="username"
            type="text"
            value={undefined}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username
          && <InputErrorContainer>{formik.errors.username}</InputErrorContainer>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="password">Password:</Label>
          <Input
            id="password"
            name="password"
            type="password"
            value={undefined}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password
          && <InputErrorContainer>{formik.errors.password}</InputErrorContainer>}
        </InputContainer>
        <BtnBox>
          <Btn type="reset">Reset</Btn>
          <Btn type="submit">Submit</Btn>
        </BtnBox>
        {formik.errors.login && <ErrorContainer>{formik.errors.login}</ErrorContainer>}
      </Form>
    </Container>
  );
};

Login.defaultProps = {
  onLogin: checkPropTypes(),
};

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
