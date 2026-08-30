import fs from "node:fs/promises"

export default async function doesFileExist(filePath: string) {
    try {

        await fs.access(filePath)
        return true

    } catch {
        return false
    }
}