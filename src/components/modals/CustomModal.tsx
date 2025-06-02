import React from 'react';
import { Modal, Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface CustomModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '25vw',
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const CustomModal = ({ open, onClose, children }: CustomModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
