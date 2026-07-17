import { deleteUserService } from "../services/deleteUserService.js";

export const deleteUser = async (req, res) => {
  try {
    const result = await deleteUserService(req.user.id);
    if(!result.status){
      return res.status(500).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}