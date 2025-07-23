import User from "../models/user.model.js";

export const authCallback = async (req, res, next) => {
  try {
    const { id, firstName, lastName, email, password } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({ clerkId: id });
    if (!existingUser) {
      //signup
      await User.create({
        clerkId: id,
        fullName: `${firstName} ${lastName}`,
        imageURL,
      });
    }
    res.status(201).json({ success: true });
  } catch (error) {
    console.error(`Error during signup: ${error.message}`);
    next(error);
  }
};
