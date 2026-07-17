import express from "express";
import { currentUser, loginUser, registerUser } from "../controllers/authController.js";
import { validateLogin, validateRegister } from "../middleware/validation.js";
import { isAuthenticated } from "../middleware/authMiddleware.js";
import { updateUser } from "../controllers/updateUserController.js";
import { validateUpdate } from "../middleware/validateUpdateUser.js";

const router = express.Router();

router.post('/register', validateRegister, registerUser);
router.post('/login', validateLogin, loginUser);
router.get('/me', isAuthenticated, currentUser);
router.patch('/me', isAuthenticated, validateUpdate, updateUser);

export default router;