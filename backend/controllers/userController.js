const { User } = require("../models");

const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(202).json(response);
    console.log("done");
  } catch (e) {
    console.log(e.message);
  }
};

const updateUser = async(req, res) => {
  try{
      const response = await User.update(req.body, {
          where: {
              user_id: req.params.user_id,
          }
      });
      res.status(203).json({msg: "User Updated"});
  }catch(e){
      console.log(e.message);
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.destroy({
      where: {
        user_id: req.params.user_id,
      },
    });
    res.status(204).json({ msg: "User Deleted" });
  } catch (e) {
    console.log(e.message);
  }
};

const updateUserLocation = async (req, res) => {
  try {
    const {latitude, longitude} = req.body;
    // console.log(req.body);
    await User.update({latitude, longitude}, {
      where: {
        user_id: req.params.id
      }
    });
    res.status(203).json({msg: "User position updated"});
  } catch (e) {
    console.log(`error: ${e.message}`);
  }
}

module.exports = { getUsers, updateUser, deleteUser, updateUserLocation };
