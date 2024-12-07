import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


import ipRoutes from './routes/ip.routes';
app.use('/ip', ipRoutes);

app.get("/", (_req, res) => {
  res.send("Express Rest API is running");
});

export default app;