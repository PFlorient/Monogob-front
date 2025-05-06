import { registerFormData } from '../common/types/register.form';
import RegisterForm from '../components/forms/RegisterForm';

const SignUpPage = () => {
  const onSubmit = (data: registerFormData) => {
    console.log(data);
  };
  return (
    <div>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default SignUpPage;
