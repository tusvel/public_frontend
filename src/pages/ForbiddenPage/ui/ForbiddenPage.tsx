import { Page } from '@/widgets/Page';
import { useTranslation } from 'react-i18next';

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid={'ForbiddenPage'}>
      {t('У вас нет доступа к этой странице')}
    </Page>
  );
};

export default ForbiddenPage;
