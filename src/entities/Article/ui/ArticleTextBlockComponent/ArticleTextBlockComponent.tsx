import { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleTextBlockComponent.module.scss';
import { type ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';

type ArticleTextBlockComponentProps = {
  className?: string;
  block: ArticleTextBlock;
};

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (
  props,
) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={cls.title} />}
      {block.paragraphs.map((paragraphs) => (
        <Text key={paragraphs} text={paragraphs} className={cls.paragraphs} />
      ))}
    </div>
  );
};
