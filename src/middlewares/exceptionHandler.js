const {JsonWebTokenError} = require("jsonwebtoken")
const exeptionHandler = (err, req, res, next) => {
   let status
   if(err instanceof JsonWebTokenError) {
      err = "Unauthorized"
      status = 401
   }
   res.error(500, {message: String(err)}, status);
}

module.exports = exeptionHandler