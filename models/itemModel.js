const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    
    itemCode:{
        type: String,
        required: true
    }, // Unique identifier of an item to avoid duplicate
    
    itemName: {
        type: String,
        required: true
    },
    
    description:{
        type: String
    },
    
    quantity:{
        type: Number,
        required: true
    },
    
    isDeleted:{
        type: Boolean,
        default: false
    },
    
    deletedComment:{
        type: String,
        default : ""
    }
})

var Items = mongoose.model("Item",itemSchema)
module.exports = Items