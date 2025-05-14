// RegisterForm.tsx
import { useState } from 'react';
import { registerFormData } from '../../common/types/register.form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface RegisterFormProps {
  onSubmit: (data: registerFormData) => void;
}

const initialForm: registerFormData = {
  username: '',
  email: '',
  password: '',
};

const RegisterForm = (props: RegisterFormProps) => {
  const [form, setForm] = useState<registerFormData>(initialForm);
  const [error, setError] = useState<registerFormData>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const validateForm = (form: registerFormData): registerFormData => {
    const errors: registerFormData = {
      username: '',
      email: '',
      password: '',
    };
    if (form.username === '') {
      errors.username = 'username is required';
    }

    if (form.email === '') {
      errors.email = 'Email is required';
    }

    if (form.password === '') {
      errors.password = 'Password is required';
    }

    if (!passwordRegex.test(form.password)) {
      errors.password =
        'Password must be at least 8 characters long and contain at least one letter and one number and one custom caractere';
    }

    return errors;
  };

  const checkError = (name: 'username' | 'email' | 'password') => {
    return submitted && error[name] !== '';
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = validateForm(form);
    if (errors.username || errors.email || errors.password) {
      setError(errors);
      return;
    }
    props.onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <TextField
        id="name"
        label="Name"
        name="name"
        onChange={handleFormChange}
        value={form.username}
        error={checkError('username')}
        helperText={checkError('username') ? error.username : ''}
      />
      <TextField
        id="email"
        label="Email"
        name="email"
        onChange={handleFormChange}
        value={form.email}
        error={checkError('email')}
        helperText={checkError('email') ? error.email : ''}
      />
      <TextField
        id="password"
        label="Password"
        type="password"
        name="password"
        onChange={handleFormChange}
        value={form.password}
        error={checkError('password')}
        helperText={checkError('password') ? error.password : ''}
        multiline
      />
      <div className="col-span-2 flex justify-center">
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default RegisterForm;
