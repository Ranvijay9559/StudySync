import { registerService, loginService, getCurrentUser } from "../services/authService.js"
import { generateAccessToken } from "../utils/jwt.js";

export const registerUser =  async (req, res) => {
  try {
    const {
      username,
      displayName,
      email,
      password
    } = req.body;

    const result = await registerService({ username, displayName, email, password });

    if(result.status){
      return res.status(201).json(result);
    } else {
      return res.status(400).json({ message: result.message }); 
    }
  }catch(err) {
    res.status(500).send("Internal Server Error");
  }
}

export const loginUser = async (req, res) => {
  try {
    const {
      identifier,
      password
    } = req.body;

    const result = await loginService({ identifier, password });
    if(result.status){
      return res.status(200).json(result);
    }
    return res.status(400).json({ message: result.message });
  }catch(error){
    console.error(error)
    return res.status(500).send("Internal Server Error");
  }
}

export const currentUser = async (req, res) => {
  try {
    const result = await getCurrentUser(req.user.id);

    if (!result.status) {
      return res.status(404).json({
        message: result.message
      });
    }

    return res.status(200).json({
      message: result.message, 
      data: result.data 
    });
  }catch(error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error"
    });
  }
}