import 'reflect-metadata';

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
