import User from "../models/userModel.js";

export const getUsersController = async (req, res) => {
    try {
        const loggedInUser = req.user._id;
        const filteredUsers = await User.find({ _id: { $ne: loggedInUser } }).select("-password");
        res.status(200).json(filteredUsers);
    } catch (error) {
        console.error("Error in getUsersController: ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
};
