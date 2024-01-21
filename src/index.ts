import express, { json } from "express";
import gradeRouter from "./routers/grades";
import { globalErrorHandler } from "./middlewares/GlobalErrorHandler";

console.log('ENV:' + process.env.NODE_ENV);

const app = express();
const port = process.env.PORT || 3000;

// JSON Parser Middleware
app.use(json());

// Routers Middleware
app.use('/grades', gradeRouter);

// Error Hadler Middleware
app.use(globalErrorHandler)

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})