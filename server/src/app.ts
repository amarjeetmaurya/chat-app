
// src/app.ts
import express from "express";
import { connectDB } from "./config/db.js";
import type { NextFunction, Request, Response } from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import apiRoutes from "./routes/apiRoutes.js"
import { checkAuth } from "./middlewares/checkAuth.js";
import cookieParser from "cookie-parser";


connectDB();
const app = express();

app.use(cors(
    {
        origin: `${process.env.CLIENT_URL}`
    }
));

app.use(express.json());
app.use(cookieParser("this-is-secret"));

app.get("/", checkAuth, (req: Request, res: Response) => {
    res.json({sucess: "hey! done!!"});
});

app.use("/api", apiRoutes)
app.use("/user", checkAuth, userRoutes);
app.use("/auth", authRoutes);

// global error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);

    res.status(500).json({
        error: "Internal Server Error"
    });
});

export default app;
