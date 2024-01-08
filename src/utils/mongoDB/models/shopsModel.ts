import mongoose from "mongoose";

const shopsSchema = new mongoose.Schema({
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
    required: true,
    type: Number
  }
});


export const Shops = mongoose.models.Shops || mongoose.model('Shops', shopsSchema);