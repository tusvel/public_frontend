import { memo, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import StarIcon from '@/shared/assets/icons/star.svg';

type StarRatingProps = {
  className?: string;
  onSelect?: (startCount: number) => void;
  selectedStars?: number;
  size?: number;
};

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
  const { className, selectedStars = 0, onSelect, size = 30 } = props;
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));
  const [currentStarsCount, setCurrentStartCount] = useState(selectedStars);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStartCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStartCount(0);
    }
  };

  const onClick = (starsCount: number) => () => {
    onSelect?.(starsCount);
    setCurrentStartCount(starsCount);
    setIsSelected(true);
  };

  return (
    <div className={classNames(cls.StarRating, {}, [className])}>
      {stars.map((star) => (
        <Icon
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          Svg={StarIcon}
          onClick={onClick(star)}
          key={star}
          className={classNames(
            cls.starIcon,
            { [cls.hover]: star <= currentStarsCount },
            [],
          )}
          width={size}
          height={size}
        />
      ))}
    </div>
  );
});
