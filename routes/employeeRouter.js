import express from 'express';
import { getAllEmployees } from '../constrollers/employeeController.js';

const router = express.Router();

router.route('/').get(getAllEmployees);
router.route('/:id');

export default router;