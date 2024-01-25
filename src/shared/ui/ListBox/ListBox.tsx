import { Fragment, type ReactNode } from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import cls from './ListBox.module.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import { HStack } from '../Stack';

export type ListBoxTypeItem = {
  value: string;
  content: ReactNode;
  disabled?: boolean;
};

type ListBoxDirectionType = 'top' | 'bottom';

type ListBoxType = {
  items?: ListBoxTypeItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange?: <T extends string>(value: T) => void;
  readonly?: boolean;
  label?: string;
  direction?: ListBoxDirectionType;
};

const mapDirectionClasses: Record<ListBoxDirectionType, string> = {
  bottom: cls.bottom,
  top: cls.top,
};

export function ListBox(props: ListBoxType) {
  const {
    className,
    items,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = 'bottom',
  } = props;

  const classesOptions = [mapDirectionClasses[direction]];

  return (
    <HStack gap={'4'}>
      {label && <span>{label + '>'}</span>}
      <HListBox
        as={'div'}
        disabled={readonly}
        className={classNames(cls.ListBox, {}, [className])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button aria-disabled={readonly} className={cls.trigger}>
          <Button disabled={readonly}>{value ?? defaultValue}</Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, classesOptions)}
        >
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              as={Fragment}
              disabled={item.disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    { [cls.active]: active, [cls.disabled]: item.disabled },
                    [],
                  )}
                >
                  {selected && '-'}
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
