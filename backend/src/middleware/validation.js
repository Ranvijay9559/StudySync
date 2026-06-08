export const validateUser = (req, res, next) => {
  const {
      username,
      displayName,
      email,
      password
    } = req.body;
  if(!username || !displayName || !email || !password){
    return res.json({
      message: "Fill all the required data"
    });
  }
  if(password.length < 8){
    return res.status(400).json({ message: "Password length should be more than 8"});
  }
  next();
}