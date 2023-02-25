import { Button, Form, Input } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import BackgroundLogin from '../background-login';
import styles from './index.module.scss';

export type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const initialValues: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

interface RegisterFormProps {
  loading?: boolean;
  onSubmit: (formState: FormState) => void;
  isSuccessfully: boolean | null;
  resetState: any;
}

const RegisterForm: FC<RegisterFormProps> = ({ resetState, isSuccessfully, loading, onSubmit }) => {
  const [form] = Form.useForm();
  const [usedEmail, setUsedEmail] = useState('');
  const navigate = useNavigate();
  useEffect(() => {
    if (isSuccessfully) {
      setUsedEmail(form.getFieldValue(['email']));
      form.validateFields(['email']);
    } else if (isSuccessfully == false) {
      form.resetFields();
      navigate('/login');
    }
  }, [isSuccessfully, form, setUsedEmail, resetState]);

  return (
    <BackgroundLogin>
      <div className={styles.formControlStyle}>
        <div>
          <h1 className={styles.loginText}>Register</h1>
        </div>
        <div className={styles.fildsStyle}>
          <Form
            name="basic"
            form={form}
            labelCol={{ span: 30 }}
            wrapperCol={{ span: 30 }}
            initialValues={initialValues}
            autoComplete="off"
            onFinish={onSubmit}
            onFinishFailed={() => console.log('fail')}
          >
            <Form.Item
              hasFeedback
              name="firstName"
              rules={[{ required: true, message: 'Please input your first name!', whitespace: true }]}
            >
              <Input className={styles.inputStyles} placeholder="First Name" />
            </Form.Item>

            <Form.Item
              hasFeedback
              name="lastName"
              rules={[{ required: true, message: 'Please input your last name!', whitespace: true }]}
            >
              <Input className={styles.inputStyles} placeholder="Last Name" />
            </Form.Item>
            <Form.Item
              hasFeedback
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Plase input your email',
                },
                ({ getFieldValue }) => ({
                  validator: () => {
                    if (isSuccessfully && getFieldValue('email') === usedEmail) {
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
            >
              <Input className={styles.inputStyles} placeholder="Email" />
            </Form.Item>

            <Form.Item hasFeedback name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
              <Input.Password className={styles.inputStyles} placeholder="Password" />
            </Form.Item>

            <Form.Item>
              <Button loading={loading} className={styles.buttonStyles} htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Link to="/login">Already have an account? Please Login</Link>
          </Form>
        </div>
      </div>
    </BackgroundLogin>
  );
};

export default RegisterForm;
