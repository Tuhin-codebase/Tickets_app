/**
 * title: quickshow app manage server side work;
 * description: this app in Mane server.js file
 * auther:MD Tuhin Ali
 * date: 10,2,2025
 */

// external import
import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";

// internal import
import connectDB from "./configs/db.js";

// create app
const app = express();
// app port Number
const port = 3000;

//Middleware
app.use(express.json());
app.use(cors());
await connectDB();
app.use(clerkMiddleware());

// Api Route
app.get("/", (req, res) => {
  res.send("server is live ");
});
app.use("/api/inngest", serve({ client: inngest, functions }));

// Liten the app
app.listen(port, () => {
  console.log("server is running ...!");
});

//quickshowApp1
