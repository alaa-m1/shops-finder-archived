import mongoose from "mongoose";

const shopsSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  averagePrice: {
    type: Number,
    required: true
  }
});


export const Shops = mongoose.models.Shops || mongoose.model('Shops', shopsSchema);