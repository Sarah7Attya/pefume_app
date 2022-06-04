const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  category:{
      type:String,
      required:true,
      enum: ['men','women'],
  },
});

module.exports = Products = mongoose.model('Products', ProductSchema);