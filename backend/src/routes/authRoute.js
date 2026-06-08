import express from "express";
import { registerUser } from "../controllers/authController.js";
import { validateUser } from "../middleware/validation.js";

const router = express.Router();

router.post('/register', validateUser, registerUser);

export default router;