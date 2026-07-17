import db from "../utils/db.js";

export const updateUserService = async ( user ) => {
  try {
    const updateData = {};

    if (user.bio !== undefined) updateData.bio = user.bio;
    if (user.displayName !== undefined) updateData.displayName = user.displayName;
    if (user.avatarUrl !== undefined) updateData.avatarUrl = user.avatarUrl;

    const updatedUser = await db.User.update({
      where: { id: user.id },
      data: updateData,
       select: {
        id: true,
        username: true,
        displayName: true,
        email: true,
        bio: true,
        avatarUrl: true
      }
    });
    return {
      status: true,
      message: "User Updated",
      updatedUser
    }
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: "Internal Server Error"
    }
  }
}