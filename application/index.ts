import app from "./src";
import * as dotenv from "dotenv";
dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;
const VERSION: string = process.env.VERSION || "1.0";

app.listen(PORT, () => {
  console.log(`Is this Azure?? -- v${VERSION}`);
  console.log(`Server is running on port ${PORT}`);
});