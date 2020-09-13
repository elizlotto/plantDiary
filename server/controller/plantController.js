const Plant = require('../models/plantSchema');

module.exports = {

    createPlant(req, res, next) {
        console.log('in plantController create')
        const { name, petName, acquired, status, price } = req.body;
        if (!name) return res.status(400).json("Missing plant name!");
        Plant.create({ name, petName, acquired, status, price }, (err, newPlant) => {
            if (err) return next(err);
            res.locals.plant = newPlant;
            return next();
        });
    },

    getPlants(req, res, next) {
        Plant.find({}, (err, allPlants) => {
            if (err) return next(err);
            res.locals.plant = allPlants;
            return next();
        });
    },
   
    editPlant(req, res, next) {
        const { _id } = req.params;
        const { status, petName } = req.body;
        if (!{ status }) return res.status(400).json("Missing an update!");
        Plant.findOneAndUpdate({ _id }, { status, petName }, { new: true }, (err, editedPlant) => {
            if (err) return next(err);
            res.locals.plant = editedPlant;
            return next();
        });
    },

    deletePlant(req, res, next){
        const { _id } = req.params;
        if (!_id) return res.status(400).json("Missing information");
        Plant.findOneAndDelete({ _id }, (err, deleted) => {
            if (err) return next(err);
            res.locals.plant = deleted;
            return next();
        });
    }

}

