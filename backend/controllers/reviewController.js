const { Review } = require("../models");
const { User } = require("../models");
const { where } = require("sequelize");

const getReview = async (req, res) => {
  try {
    const response = await Review.findAll({
      include: [
        {
          model: User,
          as: "User",
        },
      ],
    });
    res.status(200).json(response);
  } catch (e) {
    console.log(e.message);
  }
};

const postReview = async (req, res) => {
  try {
    console.log(req.body);
    const newReview = await Review.create(req.body);

    // const reviews = await Review.findAll();
    // console.log(reviews);
    // io.emit("newReview", reviews);

    res.status(201).json({ msg: "Review Added", device: newReview });
  } catch (e) {
    console.log(e.message);
  }
};

const updateReview = async (req, res) => {
  try {
    const response = await Review.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json({ msg: "Review Updated" });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { getReview, postReview, updateReview };
