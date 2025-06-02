import { useState } from 'react';
import CustomModal from '../../components/modals/CustomModal';
import { Button, Typography } from '@mui/material';

export default {
  title: 'Components/CustomModal',
  component: CustomModal,
};

export const Default = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Ouvrir la modale
      </Button>

      <CustomModal open={open} onClose={() => setOpen(false)}>
        <Typography variant="h6" gutterBottom>
          Contenu de la modale
        </Typography>
        <Typography variant="body1">
          Ceci est un exemple de contenu à l’intérieur de la modale personnalisée.
        </Typography>
      </CustomModal>
    </>
  );
};
