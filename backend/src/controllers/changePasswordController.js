import { changePasswordService } from "../services/changePasswordService.js";

export const changePassword = async (req, res) => {
  try {
    const data = {
      id: req.user.id,
      oldPassword: req.body.oldPassword,
      newPassword: req.body.newPassword
    }
    const result = await changePasswordService(data);
    if(!result.status){
      return res.status(400).json({ message: result.message });
    }
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}