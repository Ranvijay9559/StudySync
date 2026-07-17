import db from "../utils/db.js";

export const deleteUserService = async ( userId ) => {
  try {
    await db.User.delete({
      where: { id: userId }
    });
    return {
      status: true,
      message: "Account deleted successfully",
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Internal Server Error"
    }
  }
}