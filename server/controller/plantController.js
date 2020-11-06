const Plant = require("../models/plantSchema");
const mongoose = require('mongoose');

module.exports = {
  createPlant(req, res, next) {
    console.log(req.body, 'req')
    console.log('in createplant')
    const { email, plant, acquired, status, price } = req.body;

    Plant.create(
      { email, plant, acquired, status, price },
      (err, newPlant) => {
        if (err) return next(err);
        res.locals.plant = newPlant;
        return next();
      }
    );
  },

  getPlants(req, res, next) {
    Plant.find({}, (err, allPlants) => {
      if (err) return next(err);
      res.locals.plant = allPlants;
      return next();
    });
  },

  editPlant(req, res, next) {
    console.log(req.body, "req in edit")
    const { _id } = req.params;
    const { status } = req.body;
    if (!status) return res.status(400).json("Missing a status!");
    Plant.findOneAndUpdate(
      { _id },
      { status },
      { new: true },
      (err, editedPlant) => {
        if (err) return next(err);
        res.locals.plant = editedPlant;
        return next();
      }
    );
  },

  deletePlant(req, res, next) {
    const { _id } = req.params;
    if (!_id) return res.status(400).json("Missing information");
    Plant.findOneAndDelete({ _id }, (err, deleted) => {
      if (err) return next(err);
      res.locals.plant = deleted;
      return next();
    });
  },
};
