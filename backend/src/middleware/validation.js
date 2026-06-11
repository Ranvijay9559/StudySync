export const validateRegister = (req, res, next) => {
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
  if(!password?.trim())return res.status(400).json({ message: "Password can not contain only white spaces"});
  if(password.length < 8){
    return res.status(400).json({ message: "Password length should be more than 8"});
  }
  next();
}

export const validateLogin = (req, res, next) => {
  const {
      identifier,
      password
    } = req.body;
  if(!identifier?.trim() || !password){
    return res.status(400).json({
      status: false,
      message: "Identifier and password are required"
    });
  }
  next();
}