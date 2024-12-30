import { body, validationResult } from 'express-validator';

const validateAssessment = [
  body('name').notEmpty().withMessage('Name is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('html').notEmpty().withMessage('HTML content is required'),
  body('tag').notEmpty().withMessage('Tag is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

export default validateAssessment;
