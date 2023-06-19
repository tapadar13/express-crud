const { v4: uuidv4 } = require("uuid");

let users = [];

const getUsers = (req, res) => {
  res.send(users);
};

const getUser = (req, res) => {
  const { id } = req.params;

  const user = users.find((user) => user.id === id);

  res.send(user);
};

const createUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`User with the name ${user.firstName} added to the database!`);
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted from the database!`);
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const user = users.find((user) => user.id === id);

  if (firstName) user.firstName = firstName;
  if (lastName) user.lastName = lastName;
  if (age) user.age = age;

  res.send(`User with the ${id} has been updated!`);
};

module.exports = { getUsers, getUser, createUser, deleteUser, updateUser };
