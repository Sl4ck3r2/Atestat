import { FC } from 'react';
import { Helmet } from 'react-helmet-async';

import RegisterForm from '../../components/register-form';

const RegisterPage: FC = () => {
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
