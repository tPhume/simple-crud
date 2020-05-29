import mongoose from "mongoose";

const animalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
    lowercase: true,
    enum: [
      "invertebrates",
      "fish",
      "amphibians",
      "reptiles",
      "birds",
      "mammals",
    ],
  },
  species: String,
  age: {
    type: Number,
    min: 0,
    validate: Number.isInteger,
  },
});

export default animalSchema;
