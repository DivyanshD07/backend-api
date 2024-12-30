import mongoose from 'mongoose';

const assessmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  html: { type: String, required: true },
  tag: { type: String, required: true },
  dateFiled: { type: Date, default: Date.now },
});

export default mongoose.model('Assessment', assessmentSchema);
