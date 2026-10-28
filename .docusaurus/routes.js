import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/mattreimer.ca/docs/',
    component: ComponentCreator('/mattreimer.ca/docs/', 'e44'),
    routes: [
      {
        path: '/mattreimer.ca/docs/',
        component: ComponentCreator('/mattreimer.ca/docs/', 'bb8'),
        routes: [
          {
            path: '/mattreimer.ca/docs/',
            component: ComponentCreator('/mattreimer.ca/docs/', '19f'),
            routes: [
              {
                path: '/mattreimer.ca/docs/hello/',
                component: ComponentCreator('/mattreimer.ca/docs/hello/', '076'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/mattreimer.ca/',
    component: ComponentCreator('/mattreimer.ca/', 'a47'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
