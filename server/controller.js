const Explanation = require ('./model');

exports.search = async (req, res) => {
    const allExplanations = await Explanation.find();
    res.status(200);
    res.send (allExplanations);
}


exports.postNew = async (req,res) => {
    const newExpl = await new Explanation(req.body).save();
    res.send (newExpl);
}

