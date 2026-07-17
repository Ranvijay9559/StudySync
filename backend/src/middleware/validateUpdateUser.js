export const validateUpdate = (req, res, next) => {
  const { bio, displayName, avatarUrl } = req.body;
  if(
    bio === undefined &&
    displayName === undefined &&
    avatarUrl === undefined
  ){
    return res.status(400).json({ message: "No fields provided for update"})
  }
  if ( 
    bio !== undefined &&
    bio !== null &&
    !bio.trim()
  ){
    return res.status(400).json({ message: "Bio cannot be empty" });
  }

  if(
    displayName !== undefined &&
    displayName !== null &&
    !displayName.trim()
  ){
    return res.status(400).json({ message: "Display cannot be empty" });
  }

  if(
    avatarUrl !== undefined &&
    avatarUrl !== null &&
    !avatarUrl.trim()
  ){
    return res.status(400).json({ message: "AvatarUrl cannot be empty" });
  }
  next();
}