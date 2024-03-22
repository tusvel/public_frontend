import { type FC } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { ButtonTheme } from '@/shared/ui/Button';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/consts/articleConsts';

type ArticleViewSelectorProps = {
  className?: string;
  view: ArticleView;
  onViewClick?: (view: ArticleView) => void;
};

const viewTypes = [
  {
    view: ArticleView.SMALL,
    icon: TiledIcon,
  },
  {
    view: ArticleView.BIG,
    icon: ListIcon,
  },
];

export const ArticleViewSelector: FC<ArticleViewSelectorProps> = (props) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames('', {}, [className])}>
      {viewTypes.map((viewType) => (
        <Button
          key={viewType.view}
          theme={ButtonTheme.CLEAR}
          onClick={onClick(viewType.view)}
        >
          <Icon
            className={classNames(cls.viewIcon, {
              [cls.selected]: viewType.view === view,
            })}
            Svg={viewType.icon}
          />
        </Button>
      ))}
    </div>
  );
};
