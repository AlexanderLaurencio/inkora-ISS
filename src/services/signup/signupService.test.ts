import { expect, test } from "vitest"
import { signupMockData } from "./../../mockData/signupMockData.js"
import doesFileExist from "./../../utils/doesFileExist/doesFileExist.js";
import fs from "node:fs/promises"
import signupService from "./signupService.js";

test("signupService() should create the user profile image ", async () => {

    try {
        await fs.rm("userImages/testusername", { recursive: true })

    } catch {
        console.log("Error deleting directory testusername before testing the endpoint /signup")
    }

    await signupService(signupMockData.username,signupMockData.profileImage);

    //I don't assert that the directory exists because if the profile image does the directory does as well
    expect(doesFileExist("./userImages/" + signupMockData.username + "/" + `${signupMockData.username}-profileimage.jpg`)).toBeTruthy()

});