import { FC, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

import RegisterForm, { FormState } from '../../components/register-form';
import api from '../../utils/api';

const RegisterPage: FC = () => {
  const [loading, setLoading] = useState(false);
  const [isEmailExist, setIsEmailExist] = useState<boolean | null>(null);
  const resetState = useCallback(() => {
    setIsEmailExist(null);
  }, []);
  const handleFormSubmit = async (form: FormState) => {
    try {
      setLoading(true);
      await api.auth.registerPost({
        registerRequest: {
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        },
      });
      setLoading(false);
      setIsEmailExist(false);
      toast.success('Succesfuly');
    } catch (error) {
      setLoading(false);
      setIsEmailExist(true);
    }
  };
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm
        resetState={resetState}
        isSuccessfully={isEmailExist}
        loading={loading}
        onSubmit={handleFormSubmit}
      />
    </>
  );
};

export default RegisterPage;
