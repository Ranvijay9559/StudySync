import db from "../utils/db.js";
import { comparePassword, hashPassword } from "../utils/password.js";

export const changePasswordService = async ( data ) => {
  try {
    const user = await db.User.findUnique({
      where: {
        id : data.id
      }
    });
    if(!user){
      return {
        status: false,
        message: "User doesn't exist"
      }
    }

    const verified = await comparePassword(data.oldPassword, user.hashedPassword);
    if(!verified){
      return {
        status: false,
        message: "Current Password is incorrect"
      }
    }
    const newHashedPassword = await hashPassword(data.newPassword);

    await db.User.update({
      where: { id: user.id },
      data: {
        hashedPassword: newHashedPassword
      }
    });
    return {
      status: true,
      message: "Password Changed Successfully",
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Internal Server Error"
    }
  }
}