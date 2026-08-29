import request from "supertest"
import { describe, expect, test } from "vitest"
import { app } from "./app"
import { signupMockData } from "./mockData/signupMockData"
import doesFileExist from "./utils/doesFileExist/doesFileExist";
import fs from "node:fs/promises"

describe("Testing app endpoints", () => {
    test("/signup should create the user profile image and return its url", async () => {

        try {
            await fs.rm("userImages/testusername", {recursive: true})
        } catch {
            console.log("Error deleting directory testusername before testing the endpoint /signup")
        }

        request(app)
        .post("/signup")
        .send(signupMockData)
        .expect(200)
        .expect("Content-type",/text/)
        .expect("http://localhost:3200/" + signupMockData.username + "/" + `${signupMockData.username}-profileimage.jpg`)
        .end((err, res) => {
            if (err) throw err
        });

        //I don't assert that the directory exists because if the profile image does the directory does as well
        expect(doesFileExist("./userImages/" + signupMockData.username + "/" + `${signupMockData.username}-profileimage.jpg`)) ;


    })
});