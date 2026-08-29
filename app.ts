import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import { INKORA_BACKEND } from './constants';
import fs from "node:fs/promises"
import signupController from './controllers/signup/signupController';

const app: Express = express();
const port = 3200;

app.use(cors({"origin": INKORA_BACKEND, "methods": ["POST","DELETE","PUT"]}));
app.use("./signup", express.json());

app.post("/signup", signupController)