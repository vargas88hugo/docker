const mongoose = require('mongoose');

const { MONGO_URL } = require('./keys');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log(`MongoDB Connected to ${MONGO_URL}!!`);
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};

module.exports = connectDB;
