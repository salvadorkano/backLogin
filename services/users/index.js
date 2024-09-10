const userModel = require("../../persistence/model/user");

const registerUser = async (userInfo) => {
  try {
    const user = new userModel(userInfo);
    await user.save();
  } catch (error) {
    throw error;
  }
};

module.exports = { registerUser };
