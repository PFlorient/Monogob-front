import React, { useState } from 'react';
import Navbar from '../Navbar';
import { Outlet } from 'react-router';
import AuthModal from '../modals/AuthModal';
import { useAuth } from '../../store/useAuth';
import { registerUser } from '../../api/services/auth/register';
import { loginFormData } from '../../common/types/login.form';
import { registerFormData } from '../../common/types/register.form';
import axios from 'axios';
const Layout = () => {
  const [openModal, setOpenModal] = useState(false);
  const [errorLoginRequest, setErrorLoginRequest] = useState<string>('');
  const [errorRegisterRequest, setErrorRegisterRequest] = useState<string>('');
  const username = useAuth((state) => state.user?.username);
  const onConnectClick = () => {
    setOpenModal(true);
  };
  const loginSubmit = async (data: loginFormData) => {
    try {
      await useAuth.getState().callLoginApi(data);
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setErrorLoginRequest(error.response?.data.message);
      }
    }
  };
  const registerSubmit = (data: registerFormData) => {
    try {
      registerUser(data);
      setOpenModal(false);
    } catch (error) {
      console.log(error);
      if (axios.isAxiosError(error)) {
        setErrorRegisterRequest(error.response?.data.message);
      }
    }
  };
  const onDisconnectClick = () => {
    useAuth.getState().logout();
  };
  return (
    <React.Fragment>
      <header>
        <Navbar
          onConnectClick={onConnectClick}
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
  );
};

export default Layout;
