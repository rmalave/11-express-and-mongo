'use strict';

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Hero = require('../../models/hero');

let getAll = () => {
  return new Promise((resolve, reject) => {
    Hero.find((err, heroes) => {
      if (err) {
        throw err;
      }
      resolve(heroes);
    });
  });
};

let save = (hero) => {
  let newHero = new Hero({
    name: hero.name,
    superpower: hero.superpower,
    hero: hero
  });

  return new Promise((resolve, reject) => {
    newHero.save((err, savedHero) => {
      if (err) {
        throw err;
      }
      resolve(savedHero);
    });
  });
};

let get = (id) => {
  return new Promise((resolve, reject) => {
    Hero.findOne({ _id: id }, (err, heroes) => {
      if (err) {
        throw err;
      }
      resolve(heroes);
    });
  });
};

let remove = (id) => {
  return new Promise((resolve, reject) => {
    Hero.remove({ _id: id }, (err, hero) => {
      if (err) {
        throw err;
      }
      resolve(hero);
    });
  });
};

let removeAll = () => {
  return new Promise((resolve, reject) => {
    Hero.remove((err, heroes) => {
      if (err) {
        throw err;
      }
      resolve(heroes);
    });
  });
};

module.exports = { save, get, remove, getAll, removeAll };
