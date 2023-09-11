import { type FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ArticleCodeBlockComponent.module.scss';
import { type ArticleCodeBlock } from '../../model/types/article';
import { Code } from '../../../../shared/ui/Code/Code';

type ArticleCodeBlockComponentProps = {
  className?: string;
  block: ArticleCodeBlock;
};

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (
  props,
) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
};
