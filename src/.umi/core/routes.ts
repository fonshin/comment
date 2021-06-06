// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'D:/xkool/product/comment/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/pages/index').default,
    "exact": true
  },
  {
    "path": "/dashboard",
    "component": require('@/pages/Dashboard').default,
    "exact": true
  },
  {
    "path": "/planedit",
    "component": require('@/pages/PlanEdit').default,
    "exact": true
  },
  {
    "path": "/planshare",
    "component": require('@/pages/PlanShare').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
