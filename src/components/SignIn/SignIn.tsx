import { Container } from './SignIn.styled';
import { Formik, Form as FormikForm, Field } from 'formik';
import * as yup from 'yup';
import { ISignInProps, ISignInData } from '../../interfaces';

import { TextField } from 'formik-mui';
import { Button, LinearProgress } from '@mui/material';

import { getIsLoading } from '../../redux/auth/authSlice';
import { useAppSelector } from '../../redux/hooks';

export const SignIn = ({ signInHandler }: ISignInProps) => {
  const isLoading = useAppSelector(getIsLoading);
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        'Invalid email'
      )
      .required('This field is required'),

    password: yup.string().required('This field is required'),
  });

  async function submitHandler(
    values: ISignInData,
    { resetForm }: { resetForm: () => void }
  ): Promise<void> {
    const isValid = await schema.isValid(values);

    if (isValid) {
      const result = { ...values };

      const isSuccessfull = signInHandler(result);

      if (isSuccessfull) {
        resetForm();
      }
    }
  }

  return (
    <Container className="form-container">
      <h2>Sign In</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        <FormikForm>
          <Field
            component={TextField}
            type="email"
            name="email"
            fullWidth
            label="Enter your email"
            size="small"
            margin="normal"
            autoFocus
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
