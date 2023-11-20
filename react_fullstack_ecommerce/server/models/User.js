const mongoose = require('mongoose')

const UserShema = new mongoose.Schema(
    {
        username:{
            type:String,
        },
        password:{
            type:String,
        },
        role:{
            type:String,
            default :"user"
        },
        ennabled:{
            type:Boolean,
            default : false
        }
    },
   {timestamps:true}
)

module.exports = User = mongoose.model("users",UserShema)