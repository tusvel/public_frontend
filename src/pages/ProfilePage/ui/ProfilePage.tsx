import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Profile, profileReducer } from '../../../entities/Profile';

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = memo(() => {
  const { t } = useTranslation();
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', {}, [])}>
        <Profile />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
