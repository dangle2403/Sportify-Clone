import User from "../models/user.model";

export const authCallback = async (req, res) => {
  try{
    const { id, firstName, lastName, email, password } = req.body;
    //check if user already exists
    const existingUser = await User.findOne({clerkId: id});
    if(!existingUser){
      //signup
      await User.create({
        clearId: id,
        fullName: `${firstName} ${lastName}`,
        imageURL
      })
    }
    res.status(201).json({ success: true });
  }catch(error){
    console.error(`Error during signup: ${error.message}`);
    res.status(500).json({ message: "Internal server error" });
  }
}