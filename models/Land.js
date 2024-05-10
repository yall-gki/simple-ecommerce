
import mongoose from 'mongoose';
// Define a schema for the House model
const landSchema = new mongoose.Schema({
    images: [String], // Array of image URLs
    status: {
        type: String,
        enum: ['for sale', 'rented', 'sold'],
        default: 'for sale'
    },
    price: {
        type: Number,
        required: true
    },
owner : {
    type : {type : mongoose.Schema.Types.ObjectId, ref: "User"}



},
   
    surface: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    
    yearBuilt: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
      }
});

// Create a Mongoose model based on the schema
const Land = mongoose.model('Land', landSchema);

export default Land;
