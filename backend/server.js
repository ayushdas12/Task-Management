import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";


import connectDB from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";


config();


connectDB();



const app = express();



app.use(cors());

app.use(json());



app.use(
    "/api/users",
    userRoutes
);



app.use(
    "/api/tasks",
    taskRoutes
);




app.get("/",(req,res)=>{

    res.send("Task Manager API Running");

});




const PORT = process.env.PORT || 5000;



app.listen(PORT,()=>{

console.log(
`Server running on port ${PORT}`
);

});