const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Product = require('./models/Product');
const User = require('./models/User');
const Comment = require('./models/Comment');
const Cart = require('./models/Cart');
const Order = require('./models/Order');

const app = express();
app.use(bodyParser.json());

const connectionString = 'mongodb+srv://maheshp2802:M%40hesh%4002@nodeproj.a4m1w4b.mongodb.net/nodeproj?retryWrites=true&w=majority&appName=nodeproj';

// Connect to MongoDB
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Could not connect to MongoDB:', error));

// Define routes
app.post('/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.status(201).send(product);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/comments', async (req, res) => {
    try {
        const comment = new Comment(req.body);
        await comment.save();
        res.status(201).send(comment);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/carts', async (req, res) => {
    try {
        const cart = new Cart(req.body);
        await cart.save();
        res.status(201).send(cart);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post('/orders', async (req, res) => {
    try {
        const order = new Order(req.body);
        await order.save();
        res.status(201).send(order);
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});