import { createRouter, createWebHistory } from 'vue-router';
import ErrorNotFound from '../views/404.vue';
import Home from '../views/Home.vue';
import Form from '../views/Form.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../pages/Home.vue'),
        },
      ],
    },
    {
      path: '/starship',
      component: Form,
      children: [
        {
          path: '',
          name: 'Starship',
          component: () => import('../pages/Starship.vue'),
          meta: {
            requiredFields: ['economy', 'coordinates', 'tier', 'locationName', 'shipType'],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Starship_Album',
          },
        },
      ],
    },
    {
      path: '/freighter',
      component: Form,
      children: [
        {
          path: '',
          name: 'Freighter',
          component: () => import('../pages/Freighter.vue'),
          meta: {
            requiredFields: ['economy', 'systemFaction'],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Freighter_Album',
          },
        },
      ],
    },
    {
      path: '/frigate',
      component: Form,
      children: [
        {
          path: '',
          name: 'Organic Frigate',
          component: () => import('../pages/Frigate.vue'),
          meta: {
            requiredFields: ['tier'],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Organic_Frigate_Album',
          },
        },
      ],
    },
    {
      path: '/multitool',
      component: Form,
      children: [
        {
          path: '',
          name: 'Multi-Tool',
          component: () => import('../pages/Multitool.vue'),
          meta: {
            requiredFields: [
              'coordinates',
              'tier',
              'slots',
              'saveReloadLocationName',
              'saveReloadLocationType',
              'locationType',
              'locationName',
              'subtype',
              'mtType',
            ],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Multi-Tool_Albums',
          },
        },
      ],
    },
    {
      path: '/creature',
      component: Form,
      children: [
        {
          path: '',
          name: 'Creature',
          component: () => import('../pages/Creature.vue'),
          meta: {
            requiredFields: ['size'],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana#Fauna_&_Flora',
          },
        },
      ],
    },
    {
      path: '/sandworm',
      component: Form,
      children: [
        {
          path: '',
          name: 'Sandworm',
          component: () => import('../pages/Sandworm.vue'),
          meta: {
            requiredFields: ['depth', 'stomach'],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Rare_Fauna_Album',
          },
        },
      ],
    },
    {
      path: '/flora',
      component: Form,
      children: [
        {
          path: '',
          name: 'Flora',
          component: () => import('../pages/Flora.vue'),
          meta: {
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Flora_Albums',
          },
        },
      ],
    },
    {
      path: '/planet',
      component: Form,
      children: [
        {
          path: '',
          name: 'Planet',
          component: () => import('../pages/Planet.vue'),
          meta: {
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Eisvana_Planet_Albums',
          },
        },
      ],
    },
    {
      path: '/artifact',
      component: Form,
      children: [
        {
          path: '',
          name: 'Artifact',
          component: () => import('../pages/Artifact.vue'),
          meta: {
            requiredFields: ['artifactType', 'artifactRarity', 'modifier', 'value'],
            catalogueUrl: 'https://nomanssky.fandom.com/wiki/Special:Upload',
          },
        },
      ],
    },
    {
      path: '/:catchAll(.*)*',
      component: ErrorNotFound,
    },
  ],
});

export default router;
