import { Spin } from 'antd';
import { FC } from 'react';

type FullscreenLoaderProps = { className?: string };
const FullscreenLoader: FC<FullscreenLoaderProps> = () => {
  return (
    <div>
      <Spin />
    </div>
  );
};

export default FullscreenLoader;
