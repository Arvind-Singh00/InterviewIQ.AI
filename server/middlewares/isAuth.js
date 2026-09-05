import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
        let {token} = req.cookies

        if(!token){
            return res.status(401).json({
                error: "AUTH_TOKEN_MISSING",
                message: "Please sign in to continue."
            })
        }
        const verifyToken = jwt.verify(token , process.env.JWT_SECRET)
        
        if(!verifyToken){
            return res.status(401).json({
                error: "AUTH_TOKEN_INVALID",
                message: "Please sign in again."
            })
        }
        req.userId = verifyToken.userId

        next()
   

    } catch (error) {
        console.warn("[auth-error]", {
            path: req.originalUrl,
            message: error.message
        });
        return res.status(401).json({
            error: "AUTH_TOKEN_INVALID",
            message: "Please sign in again."
        })
    }
    
}

export default isAuth
