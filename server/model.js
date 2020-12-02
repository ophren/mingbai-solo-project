const mongoose = require ('./db'); 
const Schema = mongoose.Schema;

const explSchema = new Schema (
  {
    conceptCategory: {type: String},
    conceptName :  {type: String},
    conceptDescription : {type: String},
    votes : {type: Number}
  }

);

module.exports = mongoose.model ('Explanations', explSchema);