import { memo, useEffect } from 'react';
import {
  DynamicModuleLoader,
  type ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersList = {
  profile: profileReducer,
};
const ProfilePage = memo(() => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <ProfileCard />
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
