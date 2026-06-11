import jwt from "jsonwebtoken";

export function generateAccessToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_ACCESS_SECRET, {
    expiresIn: '1h'
  });
}

export function verifyAccessToken(accessToken) {
  try{
    const decoded = jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET);
    return {
      status: true,
      user: decoded
    }
  }catch(error){
    return {
      status: false,
      message: "Invalid or Token Expired"
    }
  }
}