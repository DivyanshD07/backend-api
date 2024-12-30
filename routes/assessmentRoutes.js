import express from 'express';
import {
  getAllAssessments,
  getAssessmentById,
  createAssessment,
  updateAssessment,
  deleteAssessment,
} from '../controllers/assessmentController.js';
import validateAssessment from '../middleware/validateAssessment.js';

const router = express.Router();

router.get('/', getAllAssessments); // Read all
router.get('/:id', getAssessmentById); // Read by ID
router.post('/', validateAssessment, createAssessment); // Create
router.put('/:id', validateAssessment, updateAssessment); // Update
router.delete('/:id', deleteAssessment); // Delete

export default router;
