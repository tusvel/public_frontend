import { type FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { ButtonTheme } from 'shared/ui/Button/Button.interface';

type NavbarProps = {
  className?: string;
};

export const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isAuth, setIsAuth] = useState(false);

  const toggleIsAuth = () => {
    setIsAuth((prev) => !prev);
  };

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <Button theme={ButtonTheme.CLEAR_INVERTED} onClick={toggleIsAuth}>
          Login
        </Button>
      </div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Modal isOpen={isAuth} onClose={toggleIsAuth}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at
        dolorum, facere iste molestias placeat quaerat qui quibusdam tempore
        tenetur! Accusamus consequatur consequuntur eveniet fuga provident
        quaerat totam voluptate. Blanditiis.
      </Modal>
    </div>
  );
};
