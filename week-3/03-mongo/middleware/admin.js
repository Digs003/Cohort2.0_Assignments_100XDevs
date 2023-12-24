// Middleware for handling auth
const { Admin }=require("../db/index");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const {username,password}=req.headers;
        const admin=await Admin.findOne({username,password});
        if(!admin)return res.status(401).json({message:"Unauthorized"});
        next();
    }catch(error){
        res.status(401).send();
    }
}

module.exports = adminMiddleware;