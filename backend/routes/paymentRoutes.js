const express = require('express');
const { createOrder, verifyPayment } = require('../controllers/paymentcontrollers');

const router = express.Router();

router.post('/order', createOrder);
router.post('/verify', verifyPayment);

module.exports = router;
