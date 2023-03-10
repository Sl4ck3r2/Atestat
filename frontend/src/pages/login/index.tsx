import { FC, useCallback, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

import LoginForm, { FormState } from '../../components/login-form';
import { useUserProvider } from '../../context/User';
import api from '../../utils/api';

const LoginPage: FC<{ requestedLocation?: string | null }> = ({ requestedLocation }) => {
  const [isSuccessfully, setIsSuccessfuly] = useState<boolean | null>(null);
  const navigate = useNavigate();
  const { setToken } = useUserProvider();
  const resetState = useCallback(() => {
    setIsSuccessfuly(null);
  }, []);
  const handleFormSubmit = async (form: FormState) => {
    try {
      const response = await api.auth.loginPost({
        loginRequest: {
          email: form.email,
          password: form.password,
        },
      });
      toast.success('Successfully');
      setToken(response.data);
      navigate(requestedLocation || '/dashboard');
      setIsSuccessfuly(true);
    } catch (error) {
      setIsSuccessfuly(false);
    }
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm resetState={resetState} isSuccessfully={isSuccessfully} onSubmit={handleFormSubmit} />
    </>
  );
};

export default LoginPage;
