import { registerService } from "../services/authService.js"
export const registerUser =  async (req, res) => {
  try {
    const {
      username,
      displayName,
      email,
      password
    } = req.body;

    const result = await registerService({ username, displayName, email, password });
    if(result.success){
      res.status(200).json(result.message);
    }
  }catch(err) {
    res.send("Internal Server Error");
  }
  
}