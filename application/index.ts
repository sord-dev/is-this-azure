import app from "./src";
import * as dotenv from "dotenv";
dotenv.config();

if (!process.env.PORT) process.exit(1);

const PORT: number = parseInt(process.env.PORT as string, 10);
const APP_URL: string = process.env.APP_URL as string;

app.listen(PORT, () => {
  console.log(`Express is listening on  ${APP_URL}:${PORT}`);
});