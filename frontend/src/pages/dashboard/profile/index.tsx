import { FC, useState } from 'react';
import toast from 'react-hot-toast';

import { ProfileFormState } from '../../../components/profile-form';
import SettingsForm from '../../../components/profile-form';
import api from '../../../utils/api';

const ProfilePage: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const handleFormSubmit = async (form: ProfileFormState) => {
    try {
      setLoading(true);
      await api.user
        .userCurrentPut({
          token: localStorage.getItem('token') || '',
          userDto: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            city: form.city,
            state: form.state,
            country: form.country,
            profilePictureUrl: form.profilePictureUrl,
          },
        })
        .finally(() => toast.success('Updated'));
      setLoading(false);
    } catch (error) {
      toast.error('Error');
      setLoading(false);
      console.log(error);
    }
  };
  return <SettingsForm loading={loading} onSubmit={handleFormSubmit} />;
};

export default ProfilePage;
