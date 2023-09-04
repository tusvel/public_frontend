import { type ChangeEvent, memo, useMemo } from 'react';
import { classNames, type Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

type SelectOption = {
  value: string;
  content: string;
};

type SelectProps = {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readonly?: boolean;
};

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange, readonly } = props;
  const mods: Mods = {};

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        disabled={readonly}
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
      >
        {optionsList}
      </select>
    </div>
  );
});
