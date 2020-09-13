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
        // const { id } = req.params._id;
        // console.log(id, "id")
        // console.log(req.params._id, 'params')
        const { status, petName } = req.body;
        if (!{ status }) return res.status(400).json("Missing an update!");
        Plant.findOneAndUpdate({ _id : req.params._id }, { status, petName }, { new: true }, (err, editedPlant) => {
            if (err) return next(err);
            res.locals.plant = editedPlant;
            return next();
        });
    },

    deletePlant(req, res, next){
        // const { id } = req.params._id;
        // console.log(id, 'id');
        // console.log(req.params._id, 'params')
        if (!req.params._id) return res.status(400).json("Missing information");
        Plant.findOneAndDelete({ _id : req.params._id }, (err, deleted) => {
            if (err) return next(err);
            res.locals.plant = deleted;
            return next();
        });
    }

}

