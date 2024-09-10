const { request, response } = require("express");
const { userService } = require("../../services");

const createUser = async (request, response) => {
  console.log("resquest", request);
  try {
    const { email, name } = request.body;
    console.log("email", email);
    console.log("name", name);
    if (!email || !name) {
      return response
        .status(400)
        .json({ message: "Email and name are required" });
    }
    const data = await userService.registerUser(request.body);
    return response.status(201).json({
      status: 201,
      message: "User created successfully",
      data,
    });
  } catch (error) {
    console.log("createUser error", error);
  }
};

module.exports = {
  createUser,
};
