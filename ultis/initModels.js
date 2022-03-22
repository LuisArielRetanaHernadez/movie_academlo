/* eslint-disable linebreak-style */

// ultis
const { User } = require('../model/user.model');
const { Review } = require('../model/review.model');
const { Movie } = require('../model/movie.model');
const { actInMve } = require('../model/actorsInMovies.model');
const { Actor } = require('../model/actor.model');

const initModel = () => {
  // Movie 1 <--> M Review
  Movie.hasMany(Review);
  Review.belongsTo(Movie);

  // 1 User <--> M Review
  User.hasMany(Review);
  Review.belongsTo(User);

  // Movie M <--> M Actor
  Movie.belongsToMany(Actor, { through: actInMve });
  Actor.belongsToMany(Actor, { through: actInMve });
};

module.exports = { initModel };
