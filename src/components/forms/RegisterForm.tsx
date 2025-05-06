// RegisterForm.tsx
import { useState } from 'react';
import { registerFormData } from '../../common/types/register.form';
import InputTextPassword from '../inputs/InputTextPassword';

interface RegisterFormProps {
  onSubmit: (data: registerFormData) => void;
}

const initialForm: registerFormData = {
  name: '',
  email: '',
  password: '',
};

const RegisterForm = (props: RegisterFormProps) => {
  const [form, setForm] = useState<registerFormData>(initialForm);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.onSubmit(form); // Appeler la fonction onSubmit avec les données du formulaire
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputTextPassword type="text" name="name" value={form.name} onChange={handleFormChange}>
        Name
      </InputTextPassword>
      <InputTextPassword type="email" name="email" value={form.email} onChange={handleFormChange}>
        Email
      </InputTextPassword>
      <InputTextPassword
        type="password"
        name="password"
        value={form.password}
        onChange={handleFormChange}
      >
        Password
      </InputTextPassword>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterForm;
