const jwt = require("jsonwebtoken")
const { secret } =  require('@/config/jwt')
const userModel = require("@/models/user.model")
const authRequired = async (req, res, next) => {
      const accessToken = req.headers.authorization.replace("Bearer","").trim()
       const payload = jwt.verify(accessToken, secret)
       console.log(payload)
        next();

        const currentUser = await userModel.findOne(payload.sub)
        console.log(currentUser)

  }

module.exports = authRequired