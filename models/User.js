// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  unique:true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  lands : {
    type : [{type : mongoose.Schema.Types.ObjectId, ref: "Land"}]



},
Houses : {
  type : [{type : mongoose.Schema.Types.ObjectId,ref : "House"}]
},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

export default User;
