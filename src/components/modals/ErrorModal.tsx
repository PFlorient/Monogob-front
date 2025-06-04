import React from 'react';
import CustomModal from './CustomModal';

export interface ErrorModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ open, onClose, message }) => {
  return (
    <CustomModal open={open} onClose={onClose}>
      {message}
    </CustomModal>
  );
};

export default ErrorModal;
