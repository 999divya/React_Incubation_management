const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;


const userSchema = new Schema({

    name:{
        type:String,
        // required:[true,"Name is required"],
        unique:true
    },
    email:{
        type:String,
        // required:[true,"Name is required"],
        unique:true
    },
    mobile:{
        type:String,
        // required:[true,"Mobile number is required"]
    },
    password:{
        type:String,
        // required:[true,"Password is required"]
    },
    authToken:String,
    isAdmin:Boolean
});


//     userSchema.pre("save", (next)=>{
//     // const salt = await bcrypt.genSalt(10);
//     // bcrypt.genSalt(10, (err, salt)=> {
//     //   bcrypt.hash(this.password, salt, (err, hash)=> {
//     //         // Store hash in your password DB.
//     //         console.log(hash);
//     //         this.password=hash;
//     //     });
//     // });
//     // this.password = await bcrypt.hash(this.password, salt);
// console.log("jjjjjjj"+this.password);
//     var salt = bcrypt.genSaltSync(10);
// var hash = bcrypt.hashSync(this.password, salt);
// this.password=hash;

// console.log("hash"+hash)
// })


// userSchema.pre('save', async function(next) {
//    const SALT_WORK_FACTOR = 10;
  

//     // only hash the password if it has been modified (or is new)
  

//     // generate a salt
   


// try {
//     const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
//     this.password = await bcrypt.hash(this.password, salt);
//     return next();
//   } catch (err) {
//     return next(err);
//   }
 
// });


userSchema.pre('save', async function (next) {
   const SALT_WORK_FACTOR=10;
   console.log(this.password);
    try {

      const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
      this.password = await bcrypt.hash(this.password||'', salt);
      return next();
    } catch (err) {
      return next(err);
    }
  });
module.exports = mongoose.model("User", userSchema)