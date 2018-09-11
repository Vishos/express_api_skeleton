const mongoose = require('mongoose')
//make a schema
const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlength:3
    },
    description:{
        type:String,
        default:""
    },
    is_completed:{
        type:Boolean,
        default:false
    }
}, {timestamps:true})
//connect to mongoose
mongoose.connect("mongodb://localhost:27017/tasks3",{useNewUrlParser:true}, errs=>console.log(errs?errs:"db looks ok"))
//export stuff
module.exports = mongoose.model("Task", taskSchema)