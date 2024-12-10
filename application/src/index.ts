import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


import v1Routes from './routes/v1'
app.use('/v1', v1Routes);
// app.use('/v2', );

app.get("/", (_req, res) => {
  
  const metadata = {
    name: "Is this Azure?",
    version: "v" + process.env.VERSION || "v1.0",
    status: "running",
  }

  res.status(200).json(metadata);
});

export default app;