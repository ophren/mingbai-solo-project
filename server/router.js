const router = require ('express').Router();
const controller = require ('./controller');

router.get ('/query', controller.search);
router.post ('/new', controller.postNew); 
router.put('/update/:id/:dir', controller.updateVote);

module.exports = router;