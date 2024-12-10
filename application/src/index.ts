import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

import v1Routes from './routes/v1'
app.use('/v1', v1Routes);

import v2Routes from './routes/v2'
app.use('/v2', v2Routes);

import { returnMeta } from "./routes/meta";
app.get("/", returnMeta);

export default app;