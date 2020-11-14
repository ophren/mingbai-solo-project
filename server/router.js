const router = require ('express').Router();
const controller = require ('./controller');

// Access to DB from model
router.get ('/query', controller.search);
router.post ('/new', controller.postNew); // Allow user to add category


module.exports = router;