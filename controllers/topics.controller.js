const db = require("../models");

// Defining methods for the topics controller
module.exports = {
  findAll: function(req, res) {
    db.Topic
      .findAll(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Topic
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    /*************** Add validation code and don't just use req.body */
    db.Topic
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Topic
      .findById(req.params.id)
      .update(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Topic
      .findById(req.params.id)
      .then(dbModel => dbModel.destroy())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  seedTopics: function(req, res) {
    if (req.params.password === "eOT&s7B8a0&y") {
      let topicSeeds = JSON.parse(require('../config/seeds/topic.seeds'));

      db.User.findOne()
      .then(dbUser => {
        topicSeeds.forEach(topic => topic.UserId = user.id);
        return db.Topic.bulkCreate(topicSeeds);
      })
      .then(dbResult => {
        console.log("================================\n" + 
          "Result of Topic bulk Create:\n" + dbResult
        );
        res.json(dbResult);
      })
      .catch(err => res.json(err));
    } else {
      res.err("Incorrect Password");
    }
  } /* End of seedTopics */

} /* End of module.exports */

