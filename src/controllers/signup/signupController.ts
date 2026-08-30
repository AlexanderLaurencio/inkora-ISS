import { type NextFunction, type Request, type Response } from 'express';
import createImagePath from '../../utils/createImagePath/createImagePath.js';
import singupService from '../../services/signup/signupService.js';

export default async function signupController(req: Request, res: Response, next: NextFunction) {
    try {

        interface UserData {
            username: string,
            profileImage: string
        }

        let userData: UserData = req.body;
        let profileImagePath = createImagePath(userData.username);
        
        await singupService(userData.username, userData.profileImage);

        res.status(200).end("http://localhost:3200/" + profileImagePath);

    } catch(error) {
        let err = error as Error;
        console.log(error);
        res.status(500).end(err.message)
    }
};