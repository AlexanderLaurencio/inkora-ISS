import { test, expect} from "vitest"
import doesFileExist from "./doesFileExist"

test("doesFileExist() should return true if the exits, and false if it doesn't", async () => {
    expect(await doesFileExist("package.json")).toBeTruthy();
    expect(await doesFileExist("doesntExist.js")).toBeFalsy();
    
    //Test whether a directory exist
    expect(await doesFileExist("src/utils")).toBeTruthy()
});