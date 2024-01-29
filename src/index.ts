import express, { json } from "express";
import { globalErrorHandler } from "./middlewares/global.handler.middleware";
import userRouter from "./api/user.route";
import accountRouter from "./api/account.route";
import natigaRouter from "./api/natiga.route";

console.log('ENV:' + process.env.NODE_ENV);

const app = express();
const port = process.env.PORT || 3000;

// JSON Parser Middleware
app.use(json());

// Routers Middleware
app.use('/users', userRouter);
app.use('/account', accountRouter)
app.use('/natige', natigaRouter)

// Error Hadler Middleware
app.use(globalErrorHandler);

app.listen(port, () => {
    console.log('Server listening on port: ' + port);
})