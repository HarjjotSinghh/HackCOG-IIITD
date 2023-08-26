const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        require:true
    },
    setup_complete: {
        type: Boolean,
        default: false
    },
    setup_started: {
        type: Boolean,
        default: false
    },
    setup_steps_completed: {
        type: Number,
        default: 0,
    },
    interests: {
        type: Array,
        default: []
    },
    ageGroup: {
        type: String,
        default: ""
    },
    profession: {
        type: String,
        default: ""
    }

},{ timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = {User};