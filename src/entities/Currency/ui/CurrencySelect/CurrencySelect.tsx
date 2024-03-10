import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';

type CurrencySelectProps = {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
};

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange],
  );

  return (
    <ListBox
      defaultValue={'Выберите валюту'}
      value={value}
      label={'Выберите валюту'}
      onChange={onChangeHandler}
      items={options}
      className={className}
      readonly={readonly}
      direction={'top right'}
    />
  );
});
