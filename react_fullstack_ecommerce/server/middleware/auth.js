const jwt = require('jsonwebtoken')
const User = require('../models/User')

exports.auth = async (req, res, next) => {

    try {
        const token = req.headers["authtoken"]
        if (!token) {
            return res.status(401).send("no token authorization denied")
        }

        const decoded = jwt.verify(token, 'jwtSecret')
        console.log(decoded, "middleware")
        req.user = decoded.user


        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("Error you are not autheticate")
    }
}

exports.adminCheck = async (req, res, next) => {

    try {
       const {username} = req.user
       const adminUser = await User.findOne({username}).exec()
       
    //    console.log("showadminUser",adminUser)

       if(adminUser.role !=='admin'){
        res.status(403).send(err,'admin access denied')
       }else{
        next()
       }

    } catch (error) {
        console.log(error)
        res.status(500).send("admin access denied")
    }
}