const mongoose = require ('./db'); 
const Schema = mongoose.Schema;

const explSchema = new Schema (
  {
    conceptCategory: {type: String},
    conceptName :  {type: String},
    conceptDescription : {type: String}
  }

);

module.exports = mongoose.model ('Explanations', explSchema);