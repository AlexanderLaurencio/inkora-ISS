import request from "supertest"
import { expect, test } from "vitest"
import { app } from "./app.js"
import { signupMockData } from "./mockData/signupMockData.js"
import doesFileExist from "./utils/doesFileExist/doesFileExist.js";
import fs from "node:fs/promises"

test("/signup should create the user profile image and return its url", async () => {

    try {
        await fs.rm("userImages/testusername", { recursive: true })
    } catch {
        console.log("Error deleting directory testusername before testing the endpoint /signup")
    }

    request(app)
        .post("/signup")
        .send(signupMockData)
        .expect(200)
        .expect("Content-type", /text/)
        .expect("http://localhost:3200/" + signupMockData.username + "/" + `${signupMockData.username}-profileimage.jpg`)
        .end((err, res) => {
            if (err) throw err
        });

});
