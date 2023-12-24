const jwt = require('jsonwebtoken');
const { z }=require("zod");
const jwtPassword = "secret";

const userSchema=z.object({
    username:z.string().email(),
    password:z.string().min(6),
});
function signJwt(username, password) {
    try{
        const user=userSchema.parse({username,password});
        const token=jwt.sign({username:user.username},jwtPassword);
        return token;
    }
    catch(error){
        return null;
    }
}

function decodeJwt(token) {
    
    const decoded=jwt.decode(token);
    if(decoded)return true;
    else return false;
    
        
}

function verifyJwt(token) {
    try{
        jwt.verify(token,jwtPassword);
        return true;
    }
    catch(error){
        return false;
    }
}

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword
}