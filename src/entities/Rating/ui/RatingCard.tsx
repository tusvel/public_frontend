import { memo, useCallback, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Input } from '@/shared/ui/Input/Input';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui/Button/Button';
import { ButtonTheme } from '@/shared/ui/Button/Button.interface';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/Drawer';

type RatingCardProps = {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
};

export const RatingCard = memo((props: RatingCardProps) => {
  const { className, onAccept, onCancel, hasFeedback, feedbackTitle, title } =
    props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(0);
  const [feedback, setFeedback] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Ваш отзыв')}
      />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack align={'center'} gap={'8'}>
        <Text title={title} />
        <StarRating size={40} onSelect={onSelectStars} />
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            <VStack gap={'32'} max>
              {modalContent}
              <HStack max gap={'16'} justify={'end'}>
                <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                  {t('Закрыть')}
                </Button>
                <Button onClick={acceptHandle}>{t('Отправить')}</Button>
              </HStack>
            </VStack>
          </Modal>
        </BrowserView>
        <MobileView>
          <Drawer onClose={cancelHandle} isOpen={isModalOpen}>
            <VStack gap={'32'}>
              {modalContent}
              <Button onClick={acceptHandle}>{t('Отправить')}</Button>
            </VStack>
          </Drawer>
        </MobileView>
      </VStack>
    </Card>
  );
});
