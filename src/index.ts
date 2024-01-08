import express, { json } from "express";
import gradeRouter from "./routers/grades";
import { globalErrorHandler } from "./middlewares/GlobalErrorHandler";

import dotenv from 'dotenv'

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

// JSON Parser Middleware
app.use(json());

// Routers Middleware
app.use('/grades', gradeRouter);

// Error Hadler Middleware
app.use(globalErrorHandler)

app.listen(port, () => {
    console.log('server listening on port: ' + port);
})