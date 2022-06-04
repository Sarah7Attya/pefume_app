const bcrypt = require("bcryptjs")
const mongoose = require("mongoose")
const validator = require("validator")
const jwt = require("jsonwebtoken")
const userSchema = mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: [true, "required name"]
    },
    email:{
        type: String,
        trim: true,
        required: true,
        unique: [true, "email used before"],
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)) throw new Error("invalid email address")
        }
    },
    password:{
        type: String,
        trim: true,
        required: [true, "required name"],
        // match:
    },
    userType:{
        type: String,
        trim: true,
        required: [true, "required name"],
        enum: ['admin', 'user'],
        
    },
    phone:{
        type: String,
        trim: true,
        required: [true, "required name"],
        validate(value){
            if(!validator.isMobilePhone(value, 'ar-EG') ) 
                throw new Error("invalid mobile number")
        }
    },  
    age:{
        type:Number,
        min:21,
        max:60
    },
    status:{
        type:Boolean, default:false
    },
    image:{
        type: String,
        trim: true,
    },
    addresses: [
        {
            address:{
                addrType:{
                    type: String,
                    trim: true,
                    required: [true, "required name"],
                },
                addrDetails:{
                    type: String,
                    trim: true,
                    required: [true, "required name"],
                },
                addrBuildingNum:{
                    type:Number,
                    min:1,
                    max:1000
                }
            }
        }
    ],
    tokens: [{  // [1,3,5,7]
        token: {
            type:String, trim:true, required:true //[{ti=oken:1}, {token:2}, {token:3}]
        }
    }]
}, {
    timestamps:true //createdAt, updatedAt
})
userSchema.virtual('myPosts', {
    ref:'Post',
    localField: "_id",
    foreignField: "userId"
})
userSchema.methods.toJSON = function(){
    const user = this.toObject()
    delete user.password
    delete user.__v
    delete user.tokens
    return user
}
userSchema.pre("save", async function(){
    const userData = this
    if(userData.isModified("password")) 
        userData.password = await bcrypt.hash(userData.password, 10)
})
userSchema.statics.loginUser = async(email, password)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("invalid email")
    const isValid = await user.checkPass(password)
    if(!isValid) throw new Error("invalid password")
    return user
}
userSchema.methods.generateToken = async function(){
    const user = this
    const token = jwt.sign({_id:user._id}, process.env.JWTKEY) //ey......
    user.tokens = user.tokens.concat( { token } ) //{_id:'', iat:1202}
    await user.save()
    return token
}
userSchema.methods.checkPass = async function(current){
    user = this
    const isValid = await bcrypt.compare(current, user.password)
    return isValid
}
const User = mongoose.model("User",userSchema)
module.exports = User