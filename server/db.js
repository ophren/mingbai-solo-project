const mongoose = require ('mongoose');

mongoose.connect('mongodb://localhost:27017/mingbai', {
  useNewUrlParser : true,
  useUnifiedTopology : true,
  useFindAndModify : true
});

module.exports = mongoose; // exporting to the model
