/* All routes here are from "/api/topics" */

const router = require('express').Router();
const topicsController = require("../../controllers/topics.controller");

router
  .route('/')
  .post(topicsController.create);

// router.post('/', function(req, res, next) {
//   topicsController.create(req, res);
// });

/* Actions on a topic by id */
router
  .route('/:id')
  .get(topicsController.findById)
  .put(topicsController.update)
  .delete(topicsController.remove);

router
  .route('/inittopics/:password')
  .get(topicsController.seedTopics);

module.exports = router;
