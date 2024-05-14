import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`app serving on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db Connection Failed ", err);
  });
