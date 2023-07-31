import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

type LangSwitcherProps = {
  className?: string;
  short?: boolean;
};

export const LangSwitcher: FC<LangSwitcherProps> = (props) => {
  const { t, i18n } = useTranslation();
  const { className, short } = props;

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru').then(
      () => undefined,
      () => undefined,
    );
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleLanguage}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
