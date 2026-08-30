import { app } from "./app.js";
import { port } from "./app.js";

app.listen(port, (error) => {
    if (error) {
        console.log("Error listeting to port" + port, error)
    } else {
        console.log("Server listening on port", port)
    }
});