import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';
import { ListBox } from 'shared/ui/Popups/ui/ListBox/ListBox';

type CountrySelectProps = {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
};

const options = [
  { value: Country.Armenia, content: Country.Armenia },
  { value: Country.Belarus, content: Country.Belarus },
  { value: Country.Kazakhstan, content: Country.Kazakhstan },
  { value: Country.Russia, content: Country.Russia },
  { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country);
    },
    [onChange],
  );

  return (
    <ListBox
      defaultValue={'Выберите страну'}
      label={'Выберите страну'}
      value={value}
      onChange={onChangeHandler}
      readonly={readonly}
      className={className}
      items={options}
      direction={'top right'}
    />
  );
});
