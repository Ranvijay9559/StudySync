import { updateUserService } from "../services/updateUserService.js"

export const updateUser = async (req, res) => {
  try {
    const user = {
      id: req.user.id,
      bio: req.body.bio,
      displayName: req.body.displayName,
      avatarUrl: req.body.avatarUrl
    };

    const result = await updateUserService(user);
    if(!result.status){
      return res.status(400).json({ message: result.message });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal Server Error");
  }
}