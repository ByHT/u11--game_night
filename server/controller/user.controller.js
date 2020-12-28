const db = require('../models/');
const User = db.users;

exports.create = (req, res) => {
  //Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Name can't be empty" });
    return;
  }
  // Create a new User
  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    adress: req.body.adress,
    zipcode: req.body.zipcode,
    email: req.body.email,
    phone: req.body.phone,
  });

  //Save User in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured while createing User.',
      });
    });
};

// Retrieve all Users from database
exports.findAll = (req, res) => {
  const firstName = req.query.firstName;
  let condition = firstName
    ? { firstName: { $regex: new RegExp(firstName), $options: 'i' } }
    : {};
  User.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured while retrieving users',
      });
    });
};

//Find a single User by Id in request
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findById(id)
    .then((data) => {
      if (!data)
        res.status(400).send({ message: `Not find User with id: ${id}` });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: `Error retrieveing User with id: ${id}` });
    });
};

//Update a User by Id in request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update cannot be empty!',
    });
  }
  const id = req.params.id;

  User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update User with id: ${id}. Maybe User don't exists`,
        });
      } else res.send({ message: 'User was updated successfully' });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating user with id: ${id}`,
      });
    });
};

//Delete a User by Id in request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id: ${id}. Maybe User don't exist. `,
        });
      } else {
        res.send({ message: 'User was deleted successfully!' });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Could not delete User with id: ${id}` });
    });
};

exports.deleteAll = (req, res) => {
  User.deleteMany({})
    .then((data) => {
      res.send({
        message: `${data.deletedCount} users were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occured while removing all users',
      });
    });
};

//Find all published Users
// exports.findAllPublished = (res, req) => {
//   User.find({ published: true })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || 'Some error occured while retrieving Users.',
//       });
//     });
// };
