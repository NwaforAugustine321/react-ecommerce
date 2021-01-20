import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';

import connectDb from './config/db.js';
import productRoute from './route/product.js';
import userRoute from './route/user.js';
import { notFOund, errorHandler } from './middleware/error.js';

dotenv.config();
const app = express();

connectDb()
//connect the database

//parse json data
app.use(express.json());

app.get('/', (req, res) => res.end('hey boy is working'));

//routes
app.use('/api/products', productRoute);
app.use('/api/users', userRoute);
app.use(notFOund);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));