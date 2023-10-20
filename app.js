import express from 'express';
// import employeeRouter from './routes/employeeRouter.js';

const app = express();

app.use(express.json());

// app.use('/employees', employeeRouter);
app.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'home',
  });
});

app.get('/employees', (req, res, next) => {
  res.status(200).json({
    message: 'employees',
  });
});

export default app;
