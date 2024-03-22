import { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticleImageBlockComponent.module.scss';
import { type ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text';

type ArticleImageBlockComponentProps = {
  className?: string;
  block: ArticleImageBlock;
};

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (
  props,
) => {
  const { className, block } = props;

  return (
    <div
      className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
    >
      <img src={block.src} className={cls.img} alt={block.title} />
      {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
    </div>
  );
};
