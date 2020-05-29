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
  species: {
    type: String,
    required: true,
    lowercase: true,
  },
  age: {
    type: Number,
    required: true,
    min: 0,
    validate: Number.isInteger,
  },
});

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;
