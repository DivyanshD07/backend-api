import Assessment from '../models/Assessment.js';

// reads all 
export const getAllAssessments = async (req, res) => {
  try {
    const assessments = await Assessment.find();
    res.status(200).json(assessments);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assessments' });
  }
};

// reads one
export const getAssessmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const assessment = await Assessment.findById(id);
    if (!assessment) return res.status(404).json({ error: 'Assessment not found' });
    res.status(200).json(assessment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch assessment' });
  }
};

// create
export const createAssessment = async (req, res) => {
  try {
    const newAssessment = new Assessment(req.body);
    await newAssessment.save();
    res.status(201).json(newAssessment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create assessment' });
  }
};

// update by id
export const updateAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedAssessment = await Assessment.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedAssessment) return res.status(404).json({ error: 'Assessment not found' });
    res.status(200).json(updatedAssessment);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update assessment' });
  }
};

// delete by id
export const deleteAssessment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAssessment = await Assessment.findByIdAndDelete(id);
    if (!deletedAssessment) return res.status(404).json({ error: 'Assessment not found' });
    res.status(200).json({ message: 'Assessment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete assessment' });
  }
};
