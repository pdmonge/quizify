/* All routes here are from "/api/users" */

const router = require('express').Router();
const usersController = require("../../controllers/users.controller");

router
  .route('/')
  .post(usersController.create);

// router.post('/', function(req, res, next) {
//   usersController.create(req, res);
// });

/* Actions on a user by id */
router
  .route('/:id')
  .get(usersController.findById)
  .put(usersController.update)
  .delete(usersController.remove);

router
  .route('/initusers/:password')
  .get(usersController.seedUsers);

// router
//   .route('/inittopics/:password')
//   .get(usersController.seedTopics);

// router
//   .route('/initquestions/:password')
//   .get(usersController.seedQuestions);

// router
//   .route('/initanswers/:password')
//   .get(usersController.seedAnswers);

  // router.get('/:id', function(req, res, next) {
//   console.log(`Find by ID route`);
//   usersController.findById(req, res);
//   // res.json(testUser1);
// });

/*************** Sample Code */
// Matches with "/api/books"
/* 
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);
 */
module.exports = router;
