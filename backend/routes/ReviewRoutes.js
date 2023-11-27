const express = require("express");
const { getReview, updateReview, postReview } = require("../controllers/reviewController");

const reviewRouter = express.Router();

reviewRouter.get('/review', getReview);
// reviewRouter.post('/review', postReview);
reviewRouter.patch('/review/:id', updateReview);

module.exports = reviewRouter;