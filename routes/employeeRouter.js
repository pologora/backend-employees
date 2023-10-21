import express from 'express';
import getAllEmployees from '../api/employees/getAllEmployees.js';

const router = express.Router();

router.route('/').get(getAllEmployees);

export default router;
