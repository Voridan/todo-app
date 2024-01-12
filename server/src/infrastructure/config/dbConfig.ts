import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

config();

export const dbConfig = {
  development: {
    typeorm: {
      type: 'postgres',
      url: process.env.DB_DEV_URL,
    } satisfies DataSourceOptions,
  },
  test: {},
  production: {},
};
