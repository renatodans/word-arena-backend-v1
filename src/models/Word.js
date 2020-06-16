const mongoose = require("mongoose");

const WordSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true,
  },
  theme: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  level: {
    type: Number,
    required: true,
  },
  tips: [
    {
      type: String,
      required: true,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Word", WordSchema);
