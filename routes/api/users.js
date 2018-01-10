/* All routes here are from "/api/users" */

const router = require('express').Router();
const db = require('../../models/');

/* GET a user by id */
router.get('/:id', function(req, res, next) {
  console.log(req.body);
  const testUser1 = {id: 1, email: "test1@email.com", password: "password"}
  res.json(testUser1);
});

/* POST users */
router.post('/', function(req, res, next) {
  console.log(req.body);
  newUser = req.body;
  res.json(newUser);
});

module.exports = router;
