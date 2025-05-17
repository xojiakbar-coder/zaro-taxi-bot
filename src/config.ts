const config = {
  app: {
    confirmTime: 60000
  },
  list: {
    perPage: 30
  },
  services: {
    user: 'api/user/v1',
    file: 'api/file/v1'
  } as const,
  support: {
    phone: '+998712070457',
    innerNumber: '1344'
  }
};

type Keys = keyof typeof config.services;
export type ServiceType = (typeof config.services)[Keys];

export default config;
