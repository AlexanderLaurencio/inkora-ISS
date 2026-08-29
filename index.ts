import { app } from "./app.ts";
import { port } from "./app.ts";

app.listen(port, (error) => {
    if (error) {
        console.log("Error listeting to port" + port, error)
    } else {
        console.log("Server listening on port", port)
    }
});