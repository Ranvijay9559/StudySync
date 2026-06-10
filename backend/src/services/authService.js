import db from "../utils/db.js"
import { hashPassword } from "../utils/password.js";

export const registerService = async ({username, displayName, email, password}) => {
    try {
      username = username.toLowerCase().trim();
      email = email.toLowerCase().trim();
      displayName = displayName.trim();
      const existingUser = await db.User.findFirst
        ({
          where: {
            OR: [
              { username },
              { email }
            ]
          }
        });

      if(existingUser){
        if(existingUser.username === username) {
          return {
            status: false,
            message: "username already exist"
          }
        }
        
        if(existingUser.email === email) {
          return {
            status: false,
            message: "email is already in use"
          }
        }
      }
      const hashedPassword = await hashPassword(password);

      const user = await db.User.create({
        data: {
          username,
          displayName,
          email,
          hashedPassword
        }
      })

      const safeData = { 
        id: user.id,
        username: user.username,
        displayName: user.displayName,
        email: user.email
      };

      return {
        status: true,
        message: "User Created",
        data: safeData
      }
    } catch (error) {
      if(error.code === "P2002"){
        return {
          status: false,
          message: "username or email already exists"
        }
      }
      console.error(error);
      return {
        status: false,
        message: "Internal Server Error"
      }
    }
}