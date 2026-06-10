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

    if(result.status){
      res.status(201).json(result);
    } else {
      return res.status(400).json({ message: result.message }); 
    }
  }catch(err) {
    res.status(500).send("Internal Server Error");
  }
  
}