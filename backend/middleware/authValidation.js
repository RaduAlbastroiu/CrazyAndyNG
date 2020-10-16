const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  let token = req.headers.authorization;

  // Check if admin
  if (token) {
    // Verify token
    try {
      token = token.split(' ')[1];
      const decoded = jwt.verify(token, process.env.SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(401).json({ msg: 'Token is not valid' });
    }
  } else {
    // Check if regular user
    if (req.query.deviceId) {
      req.user = { role: 'user', deviceId: req.query.deviceId };
      next();
    } else {
      // No token no device id
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }
  }
};

const authAdmin = (req, res, next) => {
  const token = req.header('x-auth-token');

  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

module.exports.auth = auth;
module.exports.authAdmin = authAdmin;
