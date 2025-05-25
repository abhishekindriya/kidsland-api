// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// router.post('/login', authController.login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/login', authController.login);

// Protected route
router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({
        message: `Welcome to the dashboard, user ID ${req.user.id}`
    });
});

module.exports = router;
