import 'reflect-metadata';

import cors from 'cors';
import express, { Application } from 'express';
import { appConfig } from '../config';
//import { initDataSource } from './infrastructure/database/config/typeorm/dataSource';
//import runTests from './tests/testRepos';

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default () => {
  app.listen(appConfig.PORT, async () => {
    try {
      //await initDataSource();
      console.log('connected to the database');
      console.log(`Server is running on port ${appConfig.PORT}`);
      //await runTests();
    } catch (error) {
      console.log('Error during Data Source initialization', error);
    }
  });
};
