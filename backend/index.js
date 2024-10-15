const express = require('express');
const app = express();

require('./dbConnect');

const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 7000;

const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const userouter = require('./routers/userRouter');
app.use('/user', userouter);
const adminrouter = require('./routers/adminRouter');
app.use('/admin', adminrouter);

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
})

