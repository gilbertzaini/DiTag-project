const { User } = require("../models/index");

const verifyUser = async (req, res, next) => {
  try {
    if (!req.session.userId)
      return res.status(402).json({ msg: "Please log in to your account" });

    const user = await User.findOne({
      where: {
        user_id: req.session.userId,
      },
    });
    if (!user) return res.status(403).json({ msg: "User not found" });
    req.userId = User.user_id;
    next();
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = {verifyUser};
