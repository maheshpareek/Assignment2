const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://maheshp2802:M%40hesh%4002@nodeproj.a4m1w4b.mongodb.net/nodeproj?retryWrites=true&w=majority&appName=nodeproj';

const connectDB = async () => {
    try {
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;