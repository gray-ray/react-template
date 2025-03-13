import { lazy } from 'react';

export default [
  {
    path: '/page1',
    name: 'page1',
    access: 'page1',
    component: lazy(() => import('@/pages/page1')),
  },
  {
    path: '/page2',
    name: 'page2',
    component: lazy(() => import('@/pages/page2')),
    access: 'page2',
  },
  {
    path: '/page2/sub1',
    name: 'sub1',
    access: 'sub1',
    component: lazy(() => import('@/pages/sub1')),
  },
  {
    path: '/403',
    // name: '403',
    component: lazy(() => import('@/pages/403')),
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/404')),
  },
  {
    path: '/',
    redirect: '/page1',
  },
];
