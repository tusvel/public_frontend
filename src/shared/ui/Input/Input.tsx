import React, {
  type InputHTMLAttributes,
  memo,
  type MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly'
>;

type InputProps = {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  readonly?: boolean;
} & HTMLInputProps;

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autofocus,
    readonly,
    ...otherProps
  } = props;
  const [caretPosition, setCaretPosition] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const isCaretVisible = isFocused && !readonly;

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current.focus();
    }
  }, [autofocus]);

  const onFocus = () => {
    setIsFocused(true);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCaretPosition(e.target.selectionStart!);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  return (
    <div
      className={classNames(cls.InputWrapper, { [cls.readonly]: readonly }, [
        className,
      ])}
    >
      {placeholder && (
        <div className={cls.placeholder}>{`${placeholder}>`}</div>
      )}
      <div className={cls.caretWrapper}>
        <input
          value={value}
          onChange={onChangeHandler}
          type={type}
          ref={ref}
          readOnly={readonly}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          className={cls.input}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 9.63}px` }}
          />
        )}
      </div>
    </div>
  );
});
