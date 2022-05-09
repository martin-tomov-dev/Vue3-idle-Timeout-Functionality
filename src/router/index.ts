import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/Layout.vue'),
    children: [
      {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        meta: {
          auth: true,
          title: 'Dashboard',
        },
      },
      {
        path: '/pages/about-us',
        name: 'about-us',
        component: () => import('@/views/pages/AboutUs.vue'),
      },
      {
        path: '/pages/invoice',
        name: 'invoice',
        component: () => import('@/views/pages/Invoice.vue'),
      },
      {
        path: '/pages/faq',
        name: 'faq',
        component: () => import('@/views/pages/FAQ.vue'),
      },
      {
        path: '/pages/wizard',
        name: 'wizard',
        component: () => import('@/views/pages/Wizard.vue'),
      },
      {
        path: '/pages/pricing',
        name: 'pricing',
        component: () => import('@/views/pages/Pricing.vue'),
      },
      {
        path: '/account',
        name: 'account',
        component: () => import('@/components/page-layouts/Account.vue'),
        children: [
          {
            path: 'overview',
            name: 'account-overview',
            component: () => import('@/views/account/Overview.vue'),
          },
          {
            path: 'settings',
            name: 'account-settings',
            component: () => import('@/views/account/Settings.vue'),
          },
          {
            path: 'security',
            name: 'account-security',
            component: () => import('@/views/account/Security.vue'),
          },
          {
            path: 'audit-logs',
            name: 'account-audit-logs',
            component: () => import('@/views/account/AuditLogs.vue'),
          },
          {
            path: 'activity',
            name: 'account-activity',
            component: () => import('@/views/account/Activity.vue'),
          },
        ],
      },
      {
        path: '/chat/private-chat',
        name: 'private-chat',
        component: () => import('@/views/chat/Chat.vue'),
      },
      {
        path: '/chat/group-chat',
        name: 'group-chat',
        component: () => import('@/views/chat/Chat.vue'),
      },
      {
        path: '/chat/drawer-chat',
        name: 'drawer-chat',
        component: () => import('@/views/chat/DrawerChat.vue'),
      },
      {
        path: '/subscriptions/subscription-list',
        name: 'subscriptions-subscription-list',
        component: () => import('@/views/subscriptions/SubscriptionList.vue'),
      },
      {
        path: '/subscriptions/add-subscription',
        name: 'subscriptions-add-subscription',
        component: () => import('@/views/subscriptions/AddSubscription.vue'),
      },
      {
        path: '/subscriptions/view-subscription',
        name: 'subscriptions-view-subscription',
        component: () => import('@/views/subscriptions/ViewSubscription.vue'),
      },
      {
        path: '/calendar',
        name: 'calendar',
        component: () => import('@/views/Calendar.vue'),
      },
    ],
  },
  {
    path: '/authentication/base',
    name: 'authentication-base',
    component: () => import('@/components/page-layouts/AuthenticationBase.vue'),
    children: [
      {
        path: 'sign-in',
        name: 'authentication-base-sign-in',
        component: () => import('@/views/authentication/base/SignIn.vue'),
      },
      {
        path: 'two-steps-auth',
        name: 'authentication-base-two-steps-auth',
        component: () => import('@/views/authentication/base/TwoStepsAuth.vue'),
      },
    ],
  },
  {
    path: '/authentication/general',
    name: 'authentication-general',
    component: () =>
      import('@/components/page-layouts/AuthenticationGeneral.vue'),
    children: [
      {
        path: '404',
        name: 'authentication-general-404',
        component: () => import('@/views/authentication/general/Error404.vue'),
      },
      {
        path: '500',
        name: 'authentication-general-500',
        component: () => import('@/views/authentication/general/Error500.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/authentication/general/404',
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(() => {
  // Scroll page to top on every route change
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
});

export default router;
