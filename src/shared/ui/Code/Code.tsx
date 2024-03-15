import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { Button } from '../Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

type CodeProps = {
  className?: string;
  text: string;
};

export const Code = memo((props: CodeProps) => {
  const { className, text } = props;

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
