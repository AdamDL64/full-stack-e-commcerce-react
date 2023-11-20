const jwt =require('jsonwebtoken')

exports.auth =async(req,res,next)=>{

    try {
        const token = req.headers["authtoken"]  
        if(!token){
          return  res.status(401).send("no token authorization denied")
        }    

        const decoded = jwt.verify(token,'jwtSecret')
        console.log(decoded ,"middleware")
        req.user = decoded.user
        
        
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send("Error you are not autheticate")
    }
}