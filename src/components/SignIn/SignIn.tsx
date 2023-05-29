import { Container } from './SignIn.styled';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ISignInProps } from '../../interfaces';

export const SignIn = ({ signInHandler }: ISignInProps) => {
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
    values: {
      name: string;
      phone: string;
    },
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
    <Container>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        <FormikForm>
          <label>
            Email
            <Field type="email" name="email" placeholder="Enter your email" />
            <span>
              <ErrorMessage name="email" />
            </span>
          </label>

          <label>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <span>
              <ErrorMessage name="password" />
            </span>
          </label>

          <button type="submit">Submit</button>
        </FormikForm>
      </Formik>
    </Container>
  );
};
