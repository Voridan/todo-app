import { DataSource } from 'typeorm';
import { dbConfig } from '../../../config/dbConfig';
import path from 'path';

export const AppDataSource = new DataSource({
  type: dbConfig.development.typeorm.type,
  url: dbConfig.development.typeorm.url,
  uuidExtension: 'uuid-ossp',
  synchronize: false,
  entities: [
    path.join(
      __dirname,
      '..',
      '..',
      'models',
      'typeorm',
      '!(*BaseEntity).{ts,js}'
    ),
  ],
  migrations: [
    path.join(__dirname, '..', '..', 'migrations', 'typeorm', '*.{ts,js}'),
  ],
  subscribers: [],
});

export const initDataSource = async () => {
  await AppDataSource.initialize();
  await AppDataSource.synchronize();
};
