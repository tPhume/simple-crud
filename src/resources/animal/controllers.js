import mongoose from "mongoose";
import Animal from "./models";

async function createAnimal(req, res) {
  const { name, group, species, age } = req.body;
  const doc = new Animal({ name, group, species, age });

  try {
    await doc.save({ validateBeforeSave: true });
  } catch (err) {
    if (err instanceof mongoose.Error.ValidationError) {
      res.status(400).json({ message: "value is not valid", error: err });
    } else if (err.message.indexOf("duplicate key error") !== -1) {
      res.status(409).json({ message: "name already exist", error: err });
    } else {
      res.status(500).json({ message: "not your fault", error: err });
    }

    return;
  }

  res.status(201).json({ message: "animal created successfully" });
}

async function getAnimal(req, res) {
  const { name } = req.params;

  try {
    const doc = await Animal.findOne({ name });
    res.status(200).json({ message: "animal retrieved", result: doc });
  } catch (err) {
    if (err instanceof mongoose.Error.DocumentNotFoundError) {
      res.status(404).json({ message: `animal with name: ${name} not found` });
    } else {
      res.status(500).json({ message: `not your fault`, error: err });
    }
  }
}

export { createAnimal, getAnimal };
