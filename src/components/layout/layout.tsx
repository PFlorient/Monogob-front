import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import AuthModal from '../modals/AuthModal';
import { useAuth } from '../../store/useAuth';
import { registerUser } from '../../api/services/auth/register';
import { loginFormData } from '../../common/types/login.form';
import { registerFormData } from '../../common/types/register.form';
import axios from 'axios';
import { createContext } from 'react';
import ErrorModal from '../modals/ErrorModal';
import RouteErrorHandler from './RouteErrorHandler';

type LayoutContextType = {
  openAuthenticationModal: () => void;
  openErrorApiModal: (errorMessage: string) => void;
};

const LayoutContext = createContext<LayoutContextType>({
  openAuthenticationModal: () => {},
  openErrorApiModal: () => {},
});

const Layout = () => {
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [errorLoginRequest, setErrorLoginRequest] = useState<string>('');
  const [errorRegisterRequest, setErrorRegisterRequest] = useState<string>('');
  const username = useAuth((state) => state.user?.username);

  const openAuthenticationModal = () => setOpenAuthModal(true);
  const openErrorApiModal = (errorMessage: string) => {
    setOpenErrorModal(true);
    setErrorMessage(errorMessage);
  };

  const loginSubmit = async (data: loginFormData) => {
    try {
      await useAuth.getState().callLoginApi(data);
      setOpenAuthModal(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorLoginRequest(error.response?.data.message);
      }
    }
  };

  const registerSubmit = async (data: registerFormData) => {
    try {
      await registerUser(data);
      setOpenAuthModal(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorRegisterRequest(error.response?.data.message);
      }
    }
  };

  const onDisconnectClick = () => {
    useAuth.getState().logout();
  };

  return (
    <LayoutContext.Provider value={{ openAuthenticationModal, openErrorApiModal }}>
      <React.Fragment>
        <header className="absolute top-0 left-0 right-0">
          <Navbar
            onConnectClick={openAuthenticationModal}
            onDisconnectClick={onDisconnectClick}
            username={username}
          />
        </header>
        <main>
          <Outlet />
          <RouteErrorHandler />
        </main>
        <footer>
          <AuthModal
            open={openAuthModal}
            onClose={() => setOpenAuthModal(false)}
            loginSubmit={loginSubmit}
            registerSubmit={registerSubmit}
            errorLoginRequest={errorLoginRequest}
            errorRegisterRequest={errorRegisterRequest}
          />
          <ErrorModal
            open={openErrorModal}
            onClose={() => setOpenErrorModal(false)}
            message={errorMessage}
          />
        </footer>
      </React.Fragment>
    </LayoutContext.Provider>
  );
};

export { Layout, LayoutContext };
export default Layout;
