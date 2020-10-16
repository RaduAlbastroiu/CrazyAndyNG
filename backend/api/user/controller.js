const jwt = require('jsonwebtoken');

class UserController {
  constructor(model) {
    this.model = model;
  }

  async sign(user) {
    return jwt.sign(
      {
        _id: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
  }

  async login(user) {
    const { email, password } = user;
    const dbUser = await this.model.findOne({ email });

    if (dbUser) {
      const same = await this.model.comparePassword(password, dbUser.password);
      if (same) {
        return this.sign(dbUser);
      }
      throw 'password mismatch';
    }
    throw 'not found';
  }
}

module.exports = UserController;
