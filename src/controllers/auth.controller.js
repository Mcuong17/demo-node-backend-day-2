const jwt = require('jsonwebtoken')
const auth = require('@/models/auth.model')
const userModel = require('@/models/user.model')
// const authService = require('@/services/auth.service')




const register = async (req, res) => {
  try {
    const data = {
      email:req.body.email,
      password:req.body.password
    }

     const result = await auth.create(data)
      const newUser = {
        id: result,
        email:req.body.email
      }
    res.success(newUser, 201)
  } catch (error) {
    res.error(error.message)
  }
}

const login = async (req, res) => {
  try {
    const user = await auth.login({
      email: req.body.email,
      password: req.body.password
    })
    if(!user) {
      res.error(401,'Unauthorized')
    }


    const payload = {
      sub: 3,
      exp: Date.now() + 60*60*1000
    }
    const { secret } =  require('@/config/jwt')
    const token = jwt.sign(payload,secret)
    res.success(user, 200, {
      access_token: token,
      access_token_ttl: 3600
    })
  } catch (error) {
     res.error(error.message)
  }
}

const getCurentUser = (req, res) => {
  
}


module.exports = {register, login, getCurentUser}