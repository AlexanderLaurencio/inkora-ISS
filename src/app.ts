import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import {INKORA_BACKEND} from "./constants.js"
import signupController from './controllers/signup/signupController.js';

export const app: Express = express();
export const port = 3200;

app.use(cors({"origin": INKORA_BACKEND, "methods": ["POST","DELETE","PUT"]}));
app.use("/signup", express.json());
app.use(express.static("userImages"))

app.post("/signup", signupController);

