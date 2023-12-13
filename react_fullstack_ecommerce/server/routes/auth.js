const express = require('express')
const router = express.Router()



// import controller
const {register ,
    listUser,
    deleteUser,
    editUser ,
    login
    ,currentUser}  = require('../controllers/auth')


//middleware

const {auth,adminCheck} = require('../middleware/auth')


// router.post('/auth',(req,res)=>{
//     res.send(req.body)
// })

// methods path http://localhost:5000/api
//mehods create ,post , delete , put
//create register
router.post('/register',register)

router.post('/login',login)

//read
router.get('/auth',listUser)

//edit
router.put('/auth',editUser);

//delete
router.delete('/auth',deleteUser)

//checktoken user admin
router.post('/current-user',auth,currentUser)

router.post('/current-admin',auth,adminCheck,currentUser)

module.exports = router