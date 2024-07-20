const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema({
    products: Array,
    quantities: Array,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Cart', CartSchema);