import { Router } from "express";
import {
  createAnimal,
  getAnimal,
  upadateAnimal,
  deleteAnimal,
} from "./controllers";

const router = Router();

router.post("/", createAnimal);
router.get("/:name", getAnimal);
router.put("/:name", upadateAnimal);
router.delete("/:name", deleteAnimal);

export default router;
