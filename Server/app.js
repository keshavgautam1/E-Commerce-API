import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))
app.use(bodyParser.json());



import router from './routes/index.js'
// routes
app.use("/api/v1",router);




export default app; 