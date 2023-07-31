import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

type LoaderProps = {
  className?: string;
};

export const Loader: FC<LoaderProps> = (props) => {
  const { className } = props;

  return (
    <div className={classNames('', {}, [className])}>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
