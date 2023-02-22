import { Button, Form, Input, Select } from 'antd';
import { FC, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useUserProvider } from '../../context/User';
import { UserDto } from '../../generated/api';
import api from '../../utils/api';
import ProfilePicture from '../profile-picture';
import styles from './index.module.scss';
export type ProfileFormState = {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  state: string;
  country: string;
  profilePictureUrl: string;
};

const initialValues: ProfileFormState = {
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  state: '',
  country: '',
  profilePictureUrl: '',
};

const { Option } = Select;

const SettingsForm: FC = () => {
  const { user } = useUserProvider();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const [isEmailExist, setIsEmailExist] = useState<boolean | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [usedEmail, setUsedEmail] = useState('');

  useEffect(() => {
    if (isEmailExist) {
      setUsedEmail(form.getFieldValue(['email']));
      form.validateFields(['email']);
    }
  }, [isEmailExist, form, setUsedEmail, usedEmail]);

  const defaultFormData: UserDto = {
    profilePictureUrl: user?.profilePictureUrl || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    city: user?.city || '',
    state: user?.state || '',
    country: user?.country || '',
  };

  const handleFormSubmit = async () => {
    try {
      setLoading(true);
      await api.user.userCurrentPut({
        token: localStorage.getItem('token') || '',
        userDto: {
          firstName: form.getFieldValue('firstName'),
          lastName: form.getFieldValue('lastName'),
          email: form.getFieldValue('email'),
          city: form.getFieldValue('city'),
          state: form.getFieldValue('state'),
          country: form.getFieldValue('country'),
          profilePictureUrl: form.getFieldValue('profilePictureUrl'),
        },
      });
      toast.success('Updated');
      setLoading(false);
    } catch (error) {
      toast.error('Error');
      setIsEmailExist(true);
      setLoading(false);
      console.log(error);
    }
  };

  const getPictureUrl = (pictureUrl: string) => {
    form.setFieldValue('profilePictureUrl', pictureUrl);
  };

  const isFieldsTouched = () => {
    const formData = form.getFieldsValue();
    if (JSON.stringify(formData) !== JSON.stringify(defaultFormData)) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const resetState = () => {
    setIsEmailExist(null);
  };

  return (
    <>
      <div className={styles.container}>
        <Form
          form={form}
          onChange={isFieldsTouched}
          className={styles.customForm}
          onFinish={handleFormSubmit}
          onFinishFailed={() => console.log('fail')}
          initialValues={{ ...initialValues, ...defaultFormData }}
          layout="vertical"
        >
          <Form.Item name="profilePictureUrl">
            <div className={styles.photo}>
              <ProfilePicture getPictureUrl={getPictureUrl} currentPicture={defaultFormData.profilePictureUrl} />
              <h1>
                <strong>{user?.userRole?.name}</strong>
              </h1>
            </div>
          </Form.Item>
          <Form.Item
            rules={[{ whitespace: true, required: true, message: 'Plase input your first name' }]}
            label={<strong>First Name</strong>}
            name="firstName"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            rules={[{ whitespace: true, required: true, message: 'Plase input your last name' }]}
            label={<strong>Last Name</strong>}
            name="lastName"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Plase input your email',
              },
              ({ getFieldValue }) => ({
                validator: () => {
                  if (isEmailExist && getFieldValue('email') === usedEmail) {
                    resetState();
                    return Promise.reject(new Error('Email alredy exist'));
                  } else {
                    return Promise.resolve(true);
                  }
                },
              }),
              {
                type: 'email',
                message: 'Bad email form',
              },
            ]}
            label={<strong>Email</strong>}
            name="email"
          >
            <Input size="large" />
          </Form.Item>
          <Form.Item label={<strong>City</strong>} name="city">
            <Input size="large" />
          </Form.Item>
          <Input.Group compact>
            <Form.Item className={styles.select} label={<strong>State</strong>} name="state">
              <Select size="large">
                <Option value="male">Male</Option>
                <Option value="female">Female</Option>
                <Option value="other">Other</Option>
              </Select>
            </Form.Item>
            <Form.Item className={styles.countryInput} label={<strong>Country</strong>} name="country">
              <Input size="large" />
            </Form.Item>
          </Input.Group>
          <Form.Item>
            <div className={styles.buttons}>
              <Button className={styles.backButton}>
                <strong>Back To Home</strong>
              </Button>
              <Button
                disabled={isDisabled}
                loading={loading}
                htmlType="submit"
                className={styles.saveButton}
                type="primary"
              >
                <strong>Save Changes</strong>
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default SettingsForm;
