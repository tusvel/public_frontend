import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfig } from 'app/providers/StoreProvider';
import { type Profile, ValidateProfileError } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<ValidateProfileError[]>
>('profile/updateProfileData', async (_, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI;
  try {
    const formData = getProfileForm(getState());

    const errors = validateProfileData(formData);
    if (errors.length) {
      return rejectWithValue(errors);
    }

    const response = await extra.api.put<Profile>('/profile', formData);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
  }
});
