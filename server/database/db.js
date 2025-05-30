import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = encodeURIComponent(process.env.DB_PASSWORD); // Encodes special characters
const CLUSTER = process.env.DB_CLUSTER;
const DB_NAME = process.env.DB_NAME;

const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

const Connection = async () => {
    try {
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

export default Connection;
