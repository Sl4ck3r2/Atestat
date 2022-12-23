import { Button, Checkbox, Form, Input } from 'antd';
import { FC } from 'react';

export type FormState = {
  name: string;
  notes: boolean;
  participants: Array<number>;
  timer?: { hour: number; minute: number };
};

const initialValues: FormState = {
  name: '',
  notes: false,
  participants: [],
};

interface CreateDailyMeetingFormProps {
  loading?: boolean;
  onSubmit?: (formState: FormState) => void;
}

const CreateDailyMeetingForm: FC<CreateDailyMeetingFormProps> = ({ loading, onSubmit }) => {
  return (
    <Form<FormState>
      initialValues={initialValues}
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      onFinish={onSubmit}
    >
      <Form.Item<FormState> name="name" rules={[{ required: true, message: 'Event name is required' }]}>
        <Input placeholder={'Event name'} />
      </Form.Item>

      <Form.Item<FormState> name="notes" valuePropName="checked">
        <Checkbox>Notes</Checkbox>
      </Form.Item>

      {/* <Form.Item<FormState> name="timer">
        <ConditionalTimerInput />
      </Form.Item>

      <Form.Item<FormState> name="participants" rules={[{ required: true, message: 'Please select a participant' }]}>
        <Select placeholder="Participants" mode="multiple" allowClear {...optionFilterByChildrenProps}>
          <Select.Option value={1}>User #1</Select.Option>
          <Select.Option value={2}>User #2</Select.Option>
          <Select.Option value={3}>User #3</Select.Option>
          <Select.Option value={4}>User #4</Select.Option>
          <Select.Option value={5}>User #5</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item<FormState> name="occurrence">
        <Select placeholder="Occurrence" mode="multiple" allowClear {...optionFilterByChildrenProps}>
          <Select.Option value="MON">Monday</Select.Option>
          <Select.Option value="TUE">Tuesday</Select.Option>
          <Select.Option value="WED">Wednesday</Select.Option>
          <Select.Option value="THU">Thursday</Select.Option>
          <Select.Option value="FRI">Friday</Select.Option>
        </Select>
      </Form.Item> */}

      <Button type="primary" loading={loading} htmlType="submit">
        Create
      </Button>
    </Form>
  );
};

export default CreateDailyMeetingForm;
