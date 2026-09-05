import User from "../models/user.model.js"


export const getCurrentUser = async (req,res) => {
    try {
        const userId = req.userId
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({
                error: "USER_NOT_FOUND",
                message:"User not found."
            })
        }
        return res.status(200).json(user)
    } catch (error) {
         console.error("[current-user-error]", {
            userId: req.userId || null,
            message: error.message,
            stack: error.stack
         });

         return res.status(500).json({
            error: "CURRENT_USER_FAILED",
            message:"Failed to get current user."
         })
    }
}
