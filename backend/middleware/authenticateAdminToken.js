const jwt = require("jsonwebtoken");
require('dotenv').config();

const verifyAdminJWT = async (req,res,next)=>{
    const authAdminHeader = req.headers['authorization'];//Bearer token
    const authAdminToken = authAdminHeader .split('Bearer ')[1];
    console.log("from the authentication admin authAdminToken"+authAdminToken);
    if(!authAdminToken) return res.status(401).json({
        errors:[
            {
                msg:"Token not found"
            },
        ],
    });


 const admin = await jwt.verify(
    authAdminToken,
    process.env.JWT_ADMIN_SECRET,
    (err, decoded)=>{
        if(err) return res.sendStatus(403);
        req.admin=decoded.email;
        console.log("reqadminhere"+req.admin);
    }

)

next();
}

module.exports  = verifyAdminJWT;