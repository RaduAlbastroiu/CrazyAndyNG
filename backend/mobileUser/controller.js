const jwt = require('jsonwebtoken');
const createUsername = require('../helpers/usernameCreation');

class UserController {
  constructor(model) {
    this.model = model;
  }

  async createUser(deviceId) {
    const user = {
      deviceId,
      name: createUsername(),
    };

    const newUser = new this.model(user);
    return await newUser.save();
  }

  async getUser(deviceId) {
    const dbMobileUser = await this.model.findOne({ deviceId });

    if (dbMobileUser) {
      return dbMobileUser;
    } else {
      return this.createUser(deviceId);
    }
  }

  async update(_id, user) {
    const oldUser = await this.model.findOne({ deviceId: _id });
    if (oldUser) {
      oldUser.name = user.name || oldUser.name;
      const newUser = await oldUser.save(user);
      return newUser._doc;
    }
    throw 'not found';
  }
}

module.exports = UserController;
