import mongoose from "mongoose";

const animalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
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
      validate: {
        validator: Number.isInteger,
        message: "Age should be an integer only",
      },
    },
  },
  { collection: "animals" }
);

const Animal = mongoose.model("Animal", animalSchema);

export default Animal;
