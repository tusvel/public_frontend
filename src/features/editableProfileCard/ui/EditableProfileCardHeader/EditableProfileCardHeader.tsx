import { memo, useCallback } from 'react';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { ButtonTheme } from '@/shared/ui/Button';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/editableProfileCardSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

type EditableProfileCardHeaderProps = {
  className?: string;
};

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('profile');

    const readonly = useSelector(getProfileReadonly);
    const profileData = useSelector(getProfileData);
    const authData = useSelector(getUserAuthData);

    const canEdit = profileData?.id === authData?.id;

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
      dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
      void dispatch(updateProfileData());
    }, [dispatch]);

    return (
      <HStack max justify="between">
        <Text title={t('Профиль')} />
        {canEdit && (
          <>
            {readonly ? (
              <Button
                theme={ButtonTheme.OUTLINE}
                onClick={onEdit}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t('Редактировать')}
              </Button>
            ) : (
              <HStack gap="8">
                <Button
                  theme={ButtonTheme.OUTLINE_RED}
                  onClick={onCancelEdit}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('Отмена')}
                </Button>
                <Button
                  theme={ButtonTheme.OUTLINE}
                  onClick={onSave}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('Сохранить')}
                </Button>
              </HStack>
            )}
          </>
        )}
      </HStack>
    );
  },
);
