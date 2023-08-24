const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const port = 9999;
const User = require('./models/UserModel');
const userRouter = require('./routes/user');

require('dotenv').config();

// app.use("/api/user",userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

mongoose.connect(`${process.env.MONGO_URI}`)
.then(() => {
    app.listen(port, () => {
    console.log(`Connected to MongoDB`);
    console.log(`Backend running on https://localhost:${port}`);
  });
})
.catch((error) => {
  console.log(error);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
