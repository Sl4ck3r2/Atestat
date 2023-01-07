import { FC, lazy, Suspense, useEffect } from 'react';
import { Navigate, RouteObject, useLocation, useRoutes } from 'react-router';

import FullscreenLoader from '../components/fullscreen-loader';
import { Role } from '../context/Role';
import AuthenticatedGuard from '../guards/authenticated';
import GuestGuard from '../guards/guest';
import DefaultLayout from '../layouts/Default';
import EmptyLayout from '../layouts/Empty';

// eslint-disable-next-line @typescript-eslint/no-explicit-any,react/display-name
const Loadable = (Component: FC) => (props: any) => {
  return (
    <Suspense fallback={<FullscreenLoader />}>
      <Component {...props} />
    </Suspense>
  );
};

const Page = {
  Project: {
    List: Loadable(lazy(() => import('./project'))),
    Daily: {
      List: Loadable(lazy(() => import('./project/_projectId/daily'))),
      Id: Loadable(lazy(() => import('./project/_projectId/daily/_dailyId'))),
      Create: Loadable(lazy(() => import('./project/_projectId/daily/create'))),
    },
    Retro: {
      List: Loadable(lazy(() => import('./project/_projectId/retro'))),
      Id: Loadable(lazy(() => import('./project/_projectId/retro/_retroId'))),
      Create: Loadable(lazy(() => import('./project/_projectId/retro/create'))),
    },
    Planning: {
      List: Loadable(lazy(() => import('./project/_projectId/planning'))),
      Id: Loadable(lazy(() => import('./project/_projectId/planning/_planningId'))),
      Create: Loadable(lazy(() => import('./project/_projectId/planning/create'))),
    },
  },
  Board: Loadable(lazy(() => import('./board'))),
  Login: Loadable(lazy(() => import('./login'))),
  Register: Loadable(lazy(() => import('./register'))),
  Error404: Loadable(lazy(() => import('./404'))),
  Admin: Loadable(lazy(() => import('./admin'))),
  AllUsers: Loadable(lazy(() => import('./admin/all-users/all-users'))),
};

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: (
      <AuthenticatedGuard>
        <EmptyLayout />
      </AuthenticatedGuard>
    ),
    children: [{ path: '/', element: <Navigate to="/admin" replace /> }],
  },
  {
    path: '/admin',
    element: (
      <AuthenticatedGuard inProjectGuard>
        <EmptyLayout />
      </AuthenticatedGuard>
    ),
    children: [
      {
        index: true,
        element: (
          <>
            <Role renderIf={({ SUPERADMIN }) => SUPERADMIN}>
              <Page.Admin />
            </Role>
            <Role renderIf={({ USER, ADMIN }) => USER || ADMIN}>
              <Page.Admin />
            </Role>
          </>
        ),
      },
      {
        path: 'all-users',
        children: [
          {
            index: true,
            element: (
              <>
                <Role renderIf={({ SUPERADMIN }) => SUPERADMIN}>
                  <Page.AllUsers />
                </Role>
                <Role renderIf={({ USER, ADMIN }) => USER || ADMIN}>
                  <EmptyLayout>
                    <Page.Error404 />
                  </EmptyLayout>
                </Role>
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    path: '/project',
    element: (
      <AuthenticatedGuard>
        <EmptyLayout />
      </AuthenticatedGuard>
    ),
    children: [{ index: true, element: <Page.Project.List /> }],
  },
  {
    path: '/project/:projectId',
    element: (
      <AuthenticatedGuard>
        <DefaultLayout />
      </AuthenticatedGuard>
    ),
    children: [
      { index: true, element: <Navigate to="./daily" replace /> },
      {
        path: 'daily',
        children: [
          { index: true, element: <Page.Project.Daily.List /> },
          { path: ':dailyId', element: <Page.Project.Daily.Id /> },
          { path: 'create', element: <Page.Project.Daily.Create /> },
        ],
      },
      {
        path: 'retro',
        children: [
          { index: true, element: <Page.Project.Retro.List /> },
          { path: ':retroId', element: <Page.Project.Retro.Id /> },
          { path: 'create', element: <Page.Project.Retro.Create /> },
        ],
      },
      {
        path: 'planning',
        children: [
          { index: true, element: <Page.Project.Planning.List /> },
          { path: ':planningId', element: <Page.Project.Planning.Id /> },
          { path: 'create', element: <Page.Project.Planning.Create /> },
        ],
      },
    ],
  },
  {
    path: '/register',
    element: (
      <GuestGuard>
        <EmptyLayout />
      </GuestGuard>
    ),
    children: [{ index: true, element: <Page.Register /> }],
  },
  {
    path: '/login',
    element: (
      <GuestGuard>
        <EmptyLayout />
      </GuestGuard>
    ),
    children: [{ index: true, element: <Page.Login /> }],
  },
  {
    path: '*',
    element: <Page.Error404 />,
  },
];

const Router: FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return useRoutes(routes);
};

export default Router;
