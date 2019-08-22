import { IConfigOptions } from '../types';

let config: IConfigOptions = {
  version: 'v1.0.0',
  serve: {
    port: 8080,
    path: '',
  },
  keys: ['huangfushan key'],
  db: {
    dialect: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'huangfushan',
    database: 'KOA_DEMO',
    pool: {
      max: 5,
      min: 0,
      idle: 10000,
    },
    logging: false,
  },
  redis: {},
};

export default config;
