const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency


var commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type:String,
        required: true
    }
},
{   usePushEach: true },
{
    timestamps: true
});

const dishschema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    lable: {
        type: String,
        default: ''
    },
    price:{
        type: Currency,
        required: true
    },
    featured:{
        type: Boolean,
        required: true
    },
    
    comments: [commentSchema]
    
},
{ usePushEach: true },
{
    timestamps: true
});

var Dishes = mongoose.model('Dish',dishschema);

module.exports = Dishes;