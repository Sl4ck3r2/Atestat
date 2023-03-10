import { Alert, Spin } from 'antd';
import { ReactElement } from 'react';
import { AsyncState } from 'react-use/lib/useAsyncFn';

type ReturnType = ReactElement;

interface AsyncStateRenderProps<T> {
  state: AsyncState<T>;
  onSuccess: (response: NonNullable<T>) => ReturnType;
}

// eslint-disable-next-line @typescript-eslint/comma-dangle
const AsyncStateRender = <T,>({ state, onSuccess }: AsyncStateRenderProps<T>): ReturnType => {
  if (state.loading) return <Spin />;
  if (state.error) return <Alert message={state.error.message} type={'error'} />;

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return onSuccess(state.value!);
};

export default AsyncStateRender;
