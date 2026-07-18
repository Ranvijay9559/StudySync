export const validateChangePassword = async (req, res, next) => {
  const { oldPassword, newPassword } = req.body;
  if(!newPassword || !oldPassword){
    return res.status(400).json({ message: "Fill all the required data"})
  }
  if(!newPassword?.trim() || !oldPassword?.trim())return res.status(400).json({ message: "Password can not contain only white spaces"});
  if(newPassword.length < 8){
    return res.status(400).json({ message: "Password length should be more than 8"})
  }
  if (oldPassword === newPassword) {
    return res.status(400).json({
        message: "New password must be different from current password"
    });
}
  next()
}