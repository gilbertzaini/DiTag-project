const { Review } = require("../models");
const { where } = require("sequelize");

const getReview = async (req, res) => {
  try {
    const response = await Review.findAll();
    res.status(240).json(response);
  } catch (e) {
    console.log(e.message);
  }
};

const postReview = async (req, res) => {
    try {
      console.log(req.body);
      const newReview = await Review.create(req.body);
      res.status(241).json({ msg: "Review Added", device: newReview });
    } catch (e) {
      console.log(e.message);
    }
  };

const updateReview = async(req, res) => {
    try{
        const response = await Review.update(req.body, {
            where: {
                id: req.params.id,
            }
        });
        res.status(242).json({msg: "Review Updated"});
    }catch(e){
        console.log(e.message);
    }
  }

module.exports = { getReview, postReview, updateReview };
