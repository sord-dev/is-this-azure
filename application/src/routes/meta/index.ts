import { Request, Response } from "express";

export const returnMeta = (_req: Request, res: Response) => {

    const metadata = {
        name: "Is this Azure?",
        version: "v" + process.env.VERSION || "v1.0",
        status: "running",
    }

    res.status(200).json(metadata);
}