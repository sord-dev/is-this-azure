import app from "./src";
import * as dotenv from "dotenv";
dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Express is listening on  port ${PORT}`);
});