const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
    purchaseHistory: Array,
    shippingAddress: String
});

module.exports = mongoose.model('User', UserSchema);