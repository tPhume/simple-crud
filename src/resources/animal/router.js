import { Router } from "express";
import { createAnimal, getAnimal } from "./controllers";

const router = Router();
router.post("/", createAnimal);
router.get("/:name", getAnimal);

export default router;
