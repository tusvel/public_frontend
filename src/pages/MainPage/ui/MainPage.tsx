import React from 'react';
import { useTranslation } from 'react-i18next';
import { RatingCard } from '@/entities/Rating';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      {t('Главная страница')}
      <RatingCard
        title={'Как вам статья?'}
        feedbackTitle={'Оставьте отзыв о статье'}
        hasFeedback
      />
    </div>
  );
};

export default MainPage;
