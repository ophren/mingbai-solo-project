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

exports.updateVote = async (req,res) => {
    try {
        const {id, dir} = req.params;
        await Explanation.findByIdAndUpdate(
            { _id: id },
            {
                $inc: {votes: dir === 'up'? 1 : -1}
            }
        )
        res.sendStatus(204);
    }

    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
