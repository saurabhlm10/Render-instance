import dotenv from "dotenv";
import app from "./app";

dotenv.config();

export const port = process.env.PORT || 7777;
console.log(process.env.PORT);

app.listen(port, () => console.log("Server listening on " + port));