import express, { NextFunction, type Express, type Request, type Response } from 'express';
import fs from "node:fs/promises"

export default async function signupController(req: Request, res: Response, next: NextFunction) {
    try {

        interface UserData {
            username: string,
            profileImage: string
        }

        let userData: UserData = req.body;

        await fs.mkdir("./userImages/" + userData.username);

        let buffer = Buffer.from(userData.profileImage,"base64");

        await fs.writeFile("./userImages/" + userData.username + "/" + userData.username, buffer);

        res.status(200).end("Profile image created successfully");

    } catch(error) {
        console.log("Error receiving profile image",error);
        res.status(500).end("Error receiving profile image")
    }
}