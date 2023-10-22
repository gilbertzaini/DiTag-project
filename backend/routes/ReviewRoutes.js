const express = require("express");
const { getReview, updateReview } = require("../controllers/reviewController");

const reviewRouter = express.Router();

reviewRouter.get('/review', getReview);
reviewRouter.patch('/review/:id', updateReview);

module.exports = reviewRouter;