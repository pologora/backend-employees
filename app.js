import express from 'express';
import employeeRouter from './routes/employeeRouter.js';

const app = express();

app.use(express.json());

app.use('/employees', employeeRouter);

export default app;
