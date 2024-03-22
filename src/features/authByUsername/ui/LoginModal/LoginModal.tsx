import { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal: FC<LoginModalProps> = (props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className={classNames('', {}, [])}
      lazy
    >
      <LoginFormAsync onSuccess={onClose} />
    </Modal>
  );
};
