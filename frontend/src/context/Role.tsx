import { FC, ReactElement, useMemo } from 'react';

import { UserRolesIsFunction, useUserProvider } from './User';

interface UserRole {
  renderIf: (v: UserRolesIsFunction) => boolean;
  children?: ReactElement;
}
export const Role: FC<UserRole> = ({ renderIf, children }) => {
  const { roleGetter: is } = useUserProvider();

  const shouldRender = useMemo(() => {
    return is(renderIf);
  }, [is, renderIf]);

  if (!shouldRender) {
    return null;
  }

  return children || null;
};
