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

const LayoutContext = createContext({
  openAuthModal: () => {},
});

const Layout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorLoginRequest, setErrorLoginRequest] = useState<string>('');
  const [errorRegisterRequest, setErrorRegisterRequest] = useState<string>('');
  const username = useAuth((state) => state.user?.username);

  const openAuthModal = () => setOpenModal(true);

  const loginSubmit = async (data: loginFormData) => {
    try {
      await useAuth.getState().callLoginApi(data);
      setOpenModal(false);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorLoginRequest(error.response?.data.message);
      }
    }
  };

  const registerSubmit = async (data: registerFormData) => {
    try {
      await registerUser(data);
      setOpenModal(false);
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
    <LayoutContext.Provider value={{ openAuthModal }}>
      <React.Fragment>
        <header className="absolute top-0 left-0 right-0">
          <Navbar
            onConnectClick={openAuthModal}
            onDisconnectClick={onDisconnectClick}
            username={username}
          />
        </header>
        <main>
          <Outlet />
        </main>
        <AuthModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          loginSubmit={loginSubmit}
          registerSubmit={registerSubmit}
          errorLoginRequest={errorLoginRequest}
          errorRegisterRequest={errorRegisterRequest}
        />
        <footer></footer>
      </React.Fragment>
    </LayoutContext.Provider>
  );
};

export { Layout, LayoutContext };
export default Layout;
