import { useState } from 'react';
import { CreateRoomData } from '../../common/types/createRoom.form';
import { Button, TextField } from '@mui/material';

interface CreateRoomFormProps {
  onSubmit: (data: CreateRoomData) => void;
}

const initialForm: CreateRoomData = {
  name: '',
};
const CreateRoomForm = (props: CreateRoomFormProps) => {
  const [form, setForm] = useState<CreateRoomData>(initialForm);
  const [error, setError] = useState<CreateRoomData>(initialForm);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validateForm = (form: CreateRoomData): CreateRoomData => {
    const errors: CreateRoomData = {
      name: '',
    };
    if (form.name === '') {
      errors.name = 'name is required';
    }
    return errors;
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);

    const errors = validateForm(form);
    if (errors.name) {
      setError(errors);
      return;
    }
    props.onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Room name"
        name="name"
        value={form.name}
        onChange={handleFormChange}
        error={submitted && error.name !== ''}
        helperText={submitted && error.name}
      />
      <Button type="submit" variant="contained">
        Create
      </Button>
    </form>
  );
};

export default CreateRoomForm;
