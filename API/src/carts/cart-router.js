const express = require('express');
const CartService = require('./cart-service');

const cartRouter = express.Router();

cartRouter
	.route('/')
	.post(async (req, res, next) => {
		const UUID = req.body;
		console.log(UUID);
	});