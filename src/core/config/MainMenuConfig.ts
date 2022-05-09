const DocMenuConfig = [
  {
    pages: [
      {
        heading: 'dashboard',
        route: '/dashboard',
        svgIcon: 'media/icons/duotune/general/gen025.svg',
      },
      {
        sectionTitle: 'pages',
        route: '/pages',
        svgIcon: 'media/icons/duotune/ecommerce/ecm007.svg',
        sub: [
          {
            heading: 'aboutUs',
            route: '/pages/about-us',
          },
          {
            heading: 'invoice',
            route: '/pages/invoice',
          },
          {
            heading: 'faq',
            route: '/pages/faq',
          },
          {
            heading: 'wizard',
            route: '/pages/wizard',
          },
          {
            heading: 'pricing',
            route: '/pages/pricing',
          },
        ],
      },
      {
        sectionTitle: 'account',
        route: '/account',
        svgIcon: 'media/icons/duotune/communication/com006.svg',
        sub: [
          {
            heading: 'overview',
            route: '/account/overview',
          },
          {
            heading: 'settings',
            route: '/account/settings',
          },
          {
            heading: 'security',
            route: '/account/security',
          },
          {
            heading: 'auditLogs',
            route: '/account/audit-logs',
          },
          {
            heading: 'activity',
            route: '/account/activity',
          },
        ],
      },
      {
        sectionTitle: 'authentication',
        route: '/authentication',
        svgIcon: 'media/icons/duotune/technology/teh004.svg',
        sub: [
          {
            sectionTitle: 'base',
            route: '/base',
            sub: [
              {
                heading: 'signIn',
                route: '/authentication/base/sign-in',
              },
              {
                heading: 'twoStepsAuth',
                route: '/authentication/base/two-steps-auth',
              },
            ],
          },
          {
            sectionTitle: 'general',
            route: '/general',
            sub: [
              {
                heading: 'error404',
                route: '/authentication/general/404',
              },
              {
                heading: 'error500',
                route: '/authentication/general/500',
              },
            ],
          },
        ],
      },
      {
        sectionTitle: 'subscriptions',
        route: '/subscriptions',
        svgIcon: 'media/icons/duotune/ecommerce/ecm002.svg',
        sub: [
          {
            heading: 'subscriptionList',
            route: '/subscriptions/subscription-list',
          },
          {
            heading: 'addSubscription',
            route: '/subscriptions/add-subscription',
          },
          {
            heading: 'viewSubscription',
            route: '/subscriptions/view-subscription',
          },
        ],
      },
      {
        sectionTitle: 'chat',
        route: '/chat',
        svgIcon: 'media/icons/duotune/communication/com012.svg',
        sub: [
          {
            heading: 'privateChat',
            route: '/chat/private-chat',
          },
          {
            heading: 'groupChat',
            route: '/chat/group-chat',
          },
          {
            heading: 'drawerChat',
            route: '/chat/drawer-chat',
          },
        ],
      },
      {
        heading: 'calendar',
        route: '/calendar',
        svgIcon: 'media/icons/duotune/general/gen014.svg',
      },
    ],
  },
];

export default DocMenuConfig;
