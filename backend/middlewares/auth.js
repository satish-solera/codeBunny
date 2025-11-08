function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Extract the token
    if (token == null) {
      return res.sendStatus(401); // Unauthorized
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }
      req.userName = user; // Attach the user to the request object
      next(); // Proceed to the next middleware
    });
  }
  

  module.exports = authenticateToken