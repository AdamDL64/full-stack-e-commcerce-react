const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        //1 check user
        const { username, password } = req.body;

        var user = await User.findOne({ username });
        //check uerมีซำไหม
        if (user) {
            return res.status(400).send("user already exists");
        }
        const salt = await bcrypt.genSalt(10);
        user = new User({
            username,
            password,
        });
        //2 encrypt เข้ารหัส
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        res.send("register success");
        // res.send(req.body.username)
    } catch (error) {
        console.log(error);
        res.status(500).send("server Error register");
    }
};

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        var user = await User.findOneAndUpdate({ username }, { new: true });
        // res.send(`${user}`)

        if (user && user.ennabled) {
            //check password  เอารหัสที่รับเข้ามา มาตรวจสอบกับ รหัสที่อยูาในฐานข้อมูล
            const isMatch = await bcrypt.compare(password, user.password);
            if(!isMatch){
                res.status(400).send('Password Invalid')
            }

            //payload ข้อมูลที่สร้างคราวๆก่อนเข้ารหัส

            const payload = {
                user:{
                    username :user.username,
                    role:user.role,
                }
            }
            //generate token
            jwt.sign(payload,"jwtSecret",{expiresIn:3600},(err,token)=>{
                if(err) throw err;
                res.json({token,payload})
            })
        } else {
            return res.status(500).send("user not found");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("login Error");
    }
};


//เช็คสิทธิ token

exports.currentUser = async(req,res)=>{

    try {
        // console.log("constroller",req.user)

        const user = await User.findOne({username:req.user.username}).select('-password').exec()
        // console.log(user ,'user')
        // เช็ดเสร็จแล้วก็ส่งไปหน้าบ้าน
        res.send(user)

    } catch (error) {
        console.log(error)
        res.status(500).send("server error currentUser")
    }
}

exports.listUser = async (req, res) => {
    try {
        res.send("list User");
    } catch (error) {
        console.log(error);
        res.status(500).send("server Error list get");
    }
};
exports.editUser = async (req, res) => {
    try {
        res.send("edit user");
    } catch (error) {
        console.log(error);
        res.status(500).send("server Error list get");
    }
};
exports.deleteUser = async (req, res) => {
    try {
        res.send("remove user");
    } catch (error) {
        console.log(error);
        res.status(500).send("server Error list get");
    }
};
