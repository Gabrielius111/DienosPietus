const jwt  = require('jsonwebtoken');
const User = require("../../models/UserModel.js"); 

const NOT_AUTHORIZED = "Not authorized";
const NOT_AUTHORIZED_NO_TOKEN = "Not authorized, no token";

async function getUser(req){
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    )  {
        try{
            const token = req.headers.authorization.split(" ")[1]; // pajema token

            if(!token){
                return {status: 401, response: NOT_AUTHORIZED_NO_TOKEN};
            }

      const decoded = jwt.verify(token, process.env.JWT_SECRET); // decodes jwt_secret

      const user = await User.findById(decoded.id).select("-password"); // find users

      return {status: 200, response: user };

    } catch (error){
      console.error(error);
      return {status: 401, response: NOT_AUTHORIZED};
    }
  }
  return {status: 401, response: NOT_AUTHORIZED};
}

module.exports = {getUser, notAuthorizeMessage:NOT_AUTHORIZED};