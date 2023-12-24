const jwt=require('jsonwebtoken');
const mypwd="ssshhh";

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const auth=req.headers.authorization;
        const token=auth.split(' ')[1];
        const verified=jwt.verify(token,mypwd);
        if(!verified){
            res.status(401).json({error:"Unauthorized"});
            return;
        }
        req.username=verified.username;
        next();
    }catch(err){
        res.status(401).json({error:"Unauthorized2"});
    }
}

module.exports = adminMiddleware;