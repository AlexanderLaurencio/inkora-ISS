import { type NextFunction, type Request, type Response } from 'express';
import fs from "node:fs/promises"

export default async function signupController(req: Request, res: Response, next: NextFunction) {
    try {

        interface UserData {
            username: string,
            profileImage: string
        }

        let userData: UserData = req.body;

        let buffer = Buffer.from(userData.profileImage,"base64");

        let imagePath = userData.username + "/" + `${userData.username}-profileimage.jpg`;

        await fs.mkdir("userImages/" + userData.username);
        await fs.writeFile("./userImages/" + imagePath, buffer);

        res.status(200).end("http://localhost:3200/" + imagePath);

    } catch(error) {
        console.log(error);
        res.status(500).end("Error storing the image. Maybe the file already exists.")
    }
};