const db = require("../models");

// Defining methods for the usersController
module.exports = {
  findAll: function(req, res) {
    db.User
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    /*************** Add validation code and don't just use req.body */
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.User
      .findById(req.params.id)
      .update(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  seedUsers: function(req, res) {
    if (req.params.password === "eOT&s7B8a0&y") {
      const userSeeds = require('../config/seeds/user.seeds');

      db.User.bulkCreate(userSeeds, {validate: true})
      .then(dbResult => {
        console.log("================================\n" + 
        "Result of User bulk Create:\n" +
        JSON.stringify(dbResult,null,2)
        );
        res.json(dbResult);
      })
      .catch(err => res.json(err));
    } else {
      res.err("Incorrect Password");
    }
  }, /* End of seedUsers */
  
  seedTopics: function(req, res) {
    if (req.params.password === "eOT&s7B8a0&y") {
      let topicSeeds = require('../config/seeds/topic.seeds');

      db.User.findAll()
      .then(dbUsers => {
        dbUsers.forEach(user => {
          if (topicSeeds[user.email]) {
            topicSeeds[user.email].forEach(topic => {
              topic.UserId = user.id;
            })
          }
        })
        return db.Topic.bulkCreate(topicSeeds);
      })
      .then(dbResult => {
        console.log("================================\n" + 
          "Result of Topic bulk Create: " + dbResult
        );
        res.json(dbResult);
      })
      .catch(err => res.json(err));
    } else {
      res.err("Incorrect Password");
    }
  }, /* End of seedTopics */

  seedQuestions: function(req, res) {
    if (req.params.password === "eOT&s7B8a0&y") {
      let questionSeeds = require('../config/seeds/question.seeds');

      db.Topic.findAll()
      .then(dbTopics => {
        dbTopics.forEach(topic => {
          if (questionSeeds[topic.name]) {
            questionSeeds[topic.name].forEach(question => {
              question.TopicId = topic.id;
            })
          }
        });
        return db.Question.bulkCreate(questionSeeds);
      })
      .then(dbResult => {
        console.log("================================\n" + 
          "Result of Question bulk Create: " + dbResult
        );
      })
      .catch(err => res.json(err));
    } else {
      res.err("Incorrect Password");
    }
  }, /* End of seedQuestions */

  seedAnswers: function(req, res) {
    if (req.params.password === "eOT&s7B8a0&y") {
      let answerSeeds = require('../config/seeds/answer.seeds');

      db.Topic.findAll({include: [db.Question]})
      .then(dbTopics => {
        console.log("================================\n" + 
          "Result of Topic findAll with Questions:\n" +
          JSON.stringify(dbTopics,null,2)
        );
        dbTopics.forEach(topic => {
          if (answerSeeds[topic.name]) {
            dbTopics.Questions.forEach(question => {
              answerSeeds[topic.name][question.text].QuestionId = question.id;
            });
          }
        });
        return db.Answer.bulkCreate(answerSeeds);
      })
      .then(dbResult => {
        console.log("================================\n" + 
          "Result of Answer bulk Create: " + dbResult
        );
      })
      .catch(err => res.json(err));
    } else {
      res.err("Incorrect Password");
    }
  } /* End of seedAnswers */

} /* End of module.exports */

