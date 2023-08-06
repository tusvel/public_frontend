import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';
import { type LoaderProps } from './Loader.interface';

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
