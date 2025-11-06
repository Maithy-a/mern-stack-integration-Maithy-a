const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authCtrl = require('../controllers/authController');
const auth = require('../middleware/auth');

// POST /api/auth/register
router.post(
    '/register',
    [
        body('name').optional().isLength({ min: 2 }),
        body('email').isEmail().withMessage('Valid email required'),
        body('password').isLength({ min: 6 }).withMessage('Password min 6 chars')
    ],
    authCtrl.register
);

// POST /api/auth/login
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Valid email required'),
        body('password').exists().withMessage('Password required')
    ],
    authCtrl.login
);

// GET /api/auth/me
router.get('/me', auth, authCtrl.getMe);

module.exports = router;
