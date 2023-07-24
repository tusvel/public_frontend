import {type FC} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import {Button} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';

type LangSwitcherProps = {
	className?: string;
};

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const {t, i18n} = useTranslation();
  const {
    className,
  } = props;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(
      () => undefined,
      () => undefined,
    );
  };

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggleLanguage}
    >
      {t('Язык')}
    </Button>
  );
};
