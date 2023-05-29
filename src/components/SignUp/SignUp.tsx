import { Container } from './SignUp.styled';
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ISignUpProps } from '../../interfaces';

export const SignUp = ({ signUpHandler }: ISignUpProps) => {
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
    values: {
      name: string;
      phone: string;
    },
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
    <Container>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={submitHandler}
        validationSchema={schema}
      >
        <FormikForm>
          <label>
            Name
            <Field type="text" name="name" placeholder="Enter your name" />
            <span>
              <ErrorMessage name="name" />
            </span>
          </label>

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
