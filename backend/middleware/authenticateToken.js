const jwt = require('jsonwebtoken');
require('dotenv').config();


//require('crypto').randomBytes(64).toString('hex')
const verifyJWT = async (req,res,next)=>{
    const authHeader = req.headers['authorization'];//Bearer token
    if(!authHeader)return res.sendStatus(401);
    console.log(authHeader);
    const authToken = authHeader.split('Bearer ')[1];
    console.log(authToken);
 const user = await jwt.verify (
        authToken,

        process.env.JWT_SECRET,
        (err, decoded)=>{
            // if (err) console.log(err)
            if(err) {
                return res.sendStatus(403);//invalid token
            }else{
                req.user = decoded.email;
                res.status(200);
                next();
            }
          
        }
    )

}

module.exports = verifyJWT;