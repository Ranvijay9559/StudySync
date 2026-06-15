import { verifyAccessToken } from "../utils/jwt.js";

export const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization?.startsWith("Bearer ")){
    return res.status(401).json({ message: "Authorization Header is not valid" });
  }

  try{
    const token = authorization.split(' ')[1];
    const verification = verifyAccessToken(token);
    if(!verification.status){
      return res.status(401).json({
        message: verification.message
      })
    }
    req.user = verification.user;
    next();
  }catch(error){
    console.error(error);

    return res.status(401).json({
      message: "Invalid token"
    });
  }
}