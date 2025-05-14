import { registerUser } from '../api/services/auth/register';
import { registerFormData } from '../common/types/register.form';
import RegisterForm from '../components/forms/RegisterForm';

const SignUpPage = () => {
  const onSubmit = (data: registerFormData) => {
    registerUser(data);
  };
  return (
    <div>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
