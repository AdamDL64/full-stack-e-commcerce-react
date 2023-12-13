const express = require("express");
const router = express.Router();


//controller
const {listUsers ,
    readUsers,
    updateUsers,
    removeUsers,
    changeStatus,
    changeRole
    
} = require("../controllers/users");


//middle ware

const {auth,adminCheck} = require("../middleware/auth");



//endpoint  http://localhost:5000/api/users

router.get("/users",auth,adminCheck,listUsers);

//endpoint  http://localhost:5000/api/users/:id
router.get("/users/:id",readUsers);

//endpoint  http://localhost:5000/api/users/:id
router.put("/users/:id",updateUsers);


//endpoint  http://localhost:5000/api/users/:id
router.delete("/users/:id",removeUsers);

//endpoint  http://localhost:5000/api/chang-status
router.post("/change-status",auth,adminCheck,changeStatus)


//endpoint  http://localhost:5000/api/chang-role
router.post("/change-role",auth,adminCheck,changeRole)



module.exports=router;

