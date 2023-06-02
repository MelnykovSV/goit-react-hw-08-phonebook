import { Container } from './SignUp.styled';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';
import { ISignUpProps, ISignUpData } from '../../interfaces';

import { TextField } from 'formik-mui';
import { Button, LinearProgress } from '@mui/material';

import { getIsLoading } from '../../redux/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

export const SignUp = ({ signUpHandler }: ISignUpProps) => {
  const isLoading = useAppSelector(getIsLoading);

  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Minimum input length 3 symbols')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Invalid format'
      )
      .required('This field is required')
      .trim(),
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email'
      )
      .required('This field is required'),

    password: yup
      .string()
      .min(6, 'Minimum input length 6 symbols')
      .matches(/[a-z]+/, 'Password shout contain at least one regular letter')
      .matches(/[A-Z]+/, 'Password shout contain at least one capital letter')
      .matches(/[0-9]+/, 'Password shout contain at least one number')
      .required('This field is required'),
  });

  async function submitHandler(
    values: ISignUpData,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values };

      const isSuccessfull = signUpHandler(result);

      if (isSuccessfull) {
        resetForm();
      }
    }
  }

  return (
    <Container className="form-container">
      <h2>Sign Up</h2>
      <p>It's quick and easy.</p>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        <FormikForm>
          <Field
            component={TextField}
            type="text"
            name="name"
            fullWidth
            autoFocus
            label="Enter your name"
            size="small"
            margin="normal"
          />

          <Field
            component={TextField}
            type="email"
            name="email"
            fullWidth
            label="Enter your email"
            size="small"
            margin="normal"
          />
          <Field
            component={TextField}
            type="password"
            name="password"
            fullWidth
            label="Enter your password"
            size="small"
            margin="normal"
          />

          {isLoading && <LinearProgress />}

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </FormikForm>
      </Formik>
    </Container>
  );
};
