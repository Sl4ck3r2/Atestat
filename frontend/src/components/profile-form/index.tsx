import { Button, Form, Input, Select } from 'antd';
import { FC } from 'react';

import { useUserProvider } from '../../context/User';
import { UserDto } from '../../generated/api';
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

interface ProfileFormProps {
  onSubmit: (form: ProfileFormState) => void;
  loading: boolean;
}

const { Option } = Select;

const SettingsForm: FC<ProfileFormProps> = ({ onSubmit, loading }) => {
  const { user } = useUserProvider();
  const [form] = Form.useForm();
  const defaultFormData: UserDto = {
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    city: user?.city || '',
    state: user?.state || '',
    country: user?.country || '',
    profilePictureUrl: user?.profilePictureUrl || '',
  };

  const getPictureUrl = (pictureUrl: string) => {
    form.setFieldValue('profilePictureUrl', pictureUrl);
  };

  return (
    <>
      <div className={styles.container}>
        <Form
          form={form}
          className={styles.customForm}
          onFinish={onSubmit}
          onFinishFailed={() => console.log('fail')}
          initialValues={{ ...initialValues, ...defaultFormData }}
          layout="vertical"
        >
          <Form.Item name="profilePictureUrl">
            <div className={styles.photo}>
              <ProfilePicture getPictureUrl={getPictureUrl} currentPicture={defaultFormData.profilePictureUrl} />
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
            <Form.Item
              className={styles.roleInput}
              initialValue={user?.userRole?.name}
              label={<strong>Role</strong>}
              name="role"
            >
              <Input disabled size="large" />
            </Form.Item>
          </Input.Group>
          <Form.Item label={<strong>Country</strong>} name="country">
            <Input size="large" />
          </Form.Item>
          <Form.Item>
            <div className={styles.buttons}>
              <Button className={styles.backButton}>
                <strong>Back To Home</strong>
              </Button>
              <Button loading={loading} htmlType="submit" className={styles.saveButton} type="primary">
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
