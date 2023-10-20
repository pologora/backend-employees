import express from 'express';
// import employeeRouter from './routes/employeeRouter.js';

const app = express();

app.use(express.json());

app.use('/employees', (req, res, next) => {
  res.status(200).json({
    message: 'employees',
  });
});
// app.use('/employees', employeeRouter);
app.use('/', (req, res, next) => {
  res.status(200).json({
    message: 'home',
  });
});

export default app;
