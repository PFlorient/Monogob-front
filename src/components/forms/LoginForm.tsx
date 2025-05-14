import { useState } from 'react';
import { loginFormData } from '../../common/types/login.form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface LoginFormProps {
  onSubmit: (data: loginFormData) => void;
}

const initialForm: loginFormData = {
  username: '',
  password: '',
};

const LoginForm = (props: LoginFormProps) => {
  const [form, setForm] = useState<loginFormData>(initialForm);
  const [error, setError] = useState<loginFormData>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateForm = (form: loginFormData): loginFormData => {
    const errors: loginFormData = {
      username: '',
      password: '',
    };
    if (form.username === '') {
      errors.username = 'username is required';
    }

    if (form.password === '') {
      errors.password = 'Password is required';
    }
    return errors;
  };

  const checkError = (name: 'username' | 'password') => {
    return submitted && error[name] !== '';
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = validateForm(form);
    if (errors.username || errors.password) {
      setError(errors);
      return;
    }
    props.onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Username"
        name="username"
        onChange={handleFormChange}
        error={checkError('username')}
        helperText={checkError('username') ? error.username : ''}
      />
      <TextField
        label="Password"
        name="password"
        type="password"
        onChange={handleFormChange}
        error={checkError('password')}
        helperText={checkError('password') ? error.password : ''}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default LoginForm;
