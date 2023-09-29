const jwt = require('jsonwebtoken');
require('dotenv').config();


function verifyToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
  
    const tokenParts = authHeader.split(' ');
  
    if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ message: 'Invalid token format' });
    }
  
    const token = tokenParts[1];
    const secretKey = process.env.SECRET_KEY;

    jwt.verify(token, secretKey, (err, decodedToken) => {
        if (err) {
            console.log(err);
        return res.status(401).json({ message: 'Invalid token' });
        }

        // Store the decoded token in the request for use in subsequent middleware or controllers
        req.user = decodedToken;
        next();
    });
}

module.exports = verifyToken;
