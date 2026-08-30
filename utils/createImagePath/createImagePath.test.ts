import { test, expect } from "vitest"
import createImagePath from "./createImagePath"

test("createImagePath() should return a user's profile image path", () => {
    let profileImagePath = createImagePath("testusername");

    expect(profileImagePath).toBe("testusername/testusername-profileimage.jpg")
});