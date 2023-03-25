import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

import goalRoutes from "./routes/goalRoutes.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

//routes
app.use("/api/goals", goalRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
