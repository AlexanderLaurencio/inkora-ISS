import createImagePath from "../../utils/createImagePath/createImagePath";
import doesFileExist from "../../utils/doesFileExist/doesFileExist";
import fs from "node:fs/promises"

export default async function singupService(username: string, profileImage: string) {
    try {
        let buffer = Buffer.from(profileImage, "base64");

        let profileImagePath = createImagePath(username);

        if (!await doesFileExist("userImages/" + username)) {
            await fs.mkdir("userImages/" + username)
        }

        if (await doesFileExist("./userImages/" + profileImagePath)) {
            throw new Error("Profile image already exists.")
        }

        await fs.writeFile("./userImages/" + profileImagePath, buffer);
    } catch(error) {
        console.log(error);
        throw new Error(`${error}`)
    }
};