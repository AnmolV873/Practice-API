import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './routers/api.route.js';

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json()); 
app.use('/users', userRoutes);
    
const MongoURL = process.env.DATABASE_URL;

mongoose.connect(MongoURL, {
}).then(() => {
    console.log('Connected to MongoDB');
})
    .catch((error) => {
        console.log("Error aa gya bhaiii", error);
    });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

