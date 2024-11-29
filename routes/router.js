import express from "express";
import {
  homeController,
  createController,
} from "../controllers/homeController.js";
import { readController } from "../controllers/readController.js";
import { editController, editPostreq } from "../controllers/editController.js";
import deleteController from "../controllers/deleteController.js";

const router = express.Router();

// router.get("/", homeController);
// router.post("/", createController);

router.route("/").get(homeController).post(createController);

router.get("/read", readController);

// router.get("/edit/:id", editController);
// router.post("/edit/:id", editPostreq);
router.route("/edit/:id").get(editController).post(editPostreq);

router.get("/delete/:id", deleteController);

export default router;
