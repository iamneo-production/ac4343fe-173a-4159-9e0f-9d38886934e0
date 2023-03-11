const jwt = require('jsonwebtoken')

const jwt_token_secret = 'ACCESS';

const JWTMiddleware = async (req, res, next) => { 
    const token = req.headers.access_token;
    if (token) {
        try {
            let decryptedToken = jwt.verify(token, jwt_token_secret);
            // console.log(decryptedToken);
            if (decryptedToken) {
                req.user = decryptedToken;
                // console.log(decryptedToken)
                return next();
            }
            else {
                return res.status(401).json({success:false, msg :"invaild token"})
            }
        } catch (err) {
            if (err.message == "invalid signature") return res.status(403).json({success:false, msg :"Different token"})
            return res.status(401).json({success:false, msg :"invaild token"})
        }
    } else {
        return res.status(401).json({success:false, msg :"token not found",})
    }
}
const JWTEncrypt = document => {
    return jwt.sign({
        _id: document._id,
        name : document.name
    }, jwt_token_secret)
} 

module.exports = { JWTMiddleware, JWTEncrypt };