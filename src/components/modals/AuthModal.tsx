import React from 'react';
import CustomModal from './CustomModal';
import LoginForm from '../forms/LoginForm';
import RegisterForm from '../forms/RegisterForm';
import { loginFormData } from '../../common/types/login.form';
import { registerFormData } from '../../common/types/register.form';

export interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  loginSubmit: (data: loginFormData) => void;
  registerSubmit: (data: registerFormData) => void;
  errorLoginRequest?: string;
  errorRegisterRequest?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({
  open,
  onClose,
  loginSubmit,
  registerSubmit,
  errorLoginRequest,
  errorRegisterRequest,
}) => {
  const [isLoginForm, setIsLoginForm] = React.useState(true);

  const handleToggleForm = () => setIsLoginForm(!isLoginForm);
  return (
    <CustomModal open={open} onClose={onClose}>
      <h2 className="text-center text-xl">{isLoginForm ? 'Connexion' : 'Inscription'}</h2>
      <div className="mt-4">
        {isLoginForm ? (
          <LoginForm onSubmit={loginSubmit} errorRequest={errorLoginRequest} />
        ) : (
          <RegisterForm onSubmit={registerSubmit} errorRequest={errorRegisterRequest} />
        )}
        <button onClick={handleToggleForm}>
          {isLoginForm ? 'S&apos;inscrire' : 'Se connecter'}
        </button>
      </div>
    </CustomModal>
  );
};

export default AuthModal;
