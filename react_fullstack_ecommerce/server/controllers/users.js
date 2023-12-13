const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.listUsers = async (req, res) => {
    try {
       //code 
       const user = await User.find({}).select('-password').exec();
       res.send(user)

       
    } catch (error) {
        console.log(error);
        res.status(500).send("server Error list");
    }
};


exports.readUsers = async (req,res)=>{

    try {
        const id = req.params.id;
        const user = await User.findOne({_id:id}).select('-password').exec()
        res.send(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("server Error readUser")
    }

}


exports.updateUsers = async (req,res)=>{

    try {
        // console.log(req.body.values)
            var {id, password} = req.body.values
        //update password

        //1 get salt
        const salt = await bcrypt.genSalt(10);
        
        //2 encrypt
        var enPassword = await bcrypt.hash(password,salt)
        console.log(enPassword)
        // res.send("hello Change Password")

        const user = await User.findOneAndUpdate(
            {_id:id},//ค้นหา
            {password:enPassword}  //update
        );

        res.send(user)
    
    } catch (error) {
        console.log(error)
        res.status(500).send("server error updateusers")
    }
}

exports.removeUsers = async (req,res)=>{

    try {
        const id = req.params.id
        const user = await User.findOneAndDelete({_id:id})
        res.send("remove Users")
    } catch (error) {
        console.log(error)
        res.status(500).send("server error removeUuser")
    }
}



exports.changeStatus = async (req,res)=>{

    try {

        console.log("value:",req.body)

        const user = await User.findOneAndUpdate(
            {_id:req.body.id},//ค้นหา
            {ennabled:req.body.ennabled}  //update
        );

        res.send(user)


    } catch (error) {
        console.log(error)
        res.status(500).send("error server controller changestatus")
    }
}

exports.changeRole = async (req,res)=>{

    try {

        console.log("value:",req.body)

        const user = await User.findOneAndUpdate(
            { _id: req.body.id},
            {role:req.body.role}, 
        );

        res.send(user)


    } catch (error) {
        console.log(error)
        res.status(500).send("error server controller changeRole")
    }
}



