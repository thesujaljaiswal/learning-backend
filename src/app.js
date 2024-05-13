import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Importing routes
import userRoutes from "./routes/user.routes.js";

// Routes Declaration
app.use("/api/v1/users", userRoutes);

// We Call the api in this order to make this look more proffessional and safe
// http://localhost:3000/api/v1/users/register
export { app };
