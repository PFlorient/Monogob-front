import { Button } from '@mui/material';
import { registerUser } from '../api/services/auth/register';
import { loginFormData } from '../common/types/login.form';
import { registerFormData } from '../common/types/register.form';
import LoginForm from '../components/forms/LoginForm';
import RegisterForm from '../components/forms/RegisterForm';
import { useAuth } from '../store/useAuth';
import { useState } from 'react';

const AuthPage = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const loginSubmit = (data: loginFormData) => {
    useAuth.getState().callLoginApi(data);
  };
  const registerSubmit = (data: registerFormData) => {
    registerUser(data);
  };
  return (
    <div>
      <section>
        <h1>Se connecter</h1>
        <LoginForm onSubmit={loginSubmit} />
        <Button onClick={() => setShowRegisterForm(true)} variant="text">
          S&apos;inscrire
        </Button>
      </section>
      {showRegisterForm && (
        <section>
          <h1>S&apos;inscrire</h1>
          <RegisterForm onSubmit={registerSubmit} />
        </section>
      )}
    </div>
  );
};

export default AuthPage;
