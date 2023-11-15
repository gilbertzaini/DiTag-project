const {Coordinate} = require("../models");
const {where} = require("sequelize");

const getDeviceCoordinate = async(req, res) => {
    try{
        const response = await Coordinate.findOne({
            where: {
                device_id: req.params.device_id,
            }
        });
        res.status(220).json(response);
    }catch(e){
        console.log(e.message);
    }
}

const updateCoordinate = async(req, res) => {
    try{
        const response = await Coordinate.update(req.body, {
            where: {
                device_id: req.params.device_id,
            }
        });
        io.emit('coordinateUpdated', devices);
        res.status(221).json({msg: "Coordinate Updated"});
    }catch(e){
        console.log(e.message);
    }
}

module.exports = {getDeviceCoordinate, updateCoordinate};