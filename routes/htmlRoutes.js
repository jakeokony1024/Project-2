var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/classes", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("classes", {
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/contact", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("contact", {
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/gallery", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("gallery", {
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/about-us", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("about-us", {
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  app.get("/userpage", function(req, res) {
    db.User.findAll({}).then(function(dbUser) {
      res.render("about-us", {
        msg: "Welcome!",
        examples: dbUser
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
